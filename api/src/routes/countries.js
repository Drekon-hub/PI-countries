const { Router } = require('express');
const router = Router();
const axios = require ('axios');
const {Country, Activities} = require('../db')

// quise hacerlo modularizado pero me re confunde mal :c

// const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')

// const API = 'https://restcountries.com/v3.1/all'
// const countries = await axios(API

router.get('/', async (req, res) => {

    const getDbInfo = async () => {
        return await Country.findAll({
            include: {
                model: Activities,
                attributes: ['name', 'difficult', 'duration', 'season'],
                through: {
                    attributes: [],
                },  
            }
        })
    }
    
    const countriesAPI = await axios.get('https://restcountries.com/v3/all');
    const countriesDB = countriesAPI.data; 
    let comodin2 = ""
    const cap = (capital) =>  capital ? comodin2.concat(capital) : "no hay capital" 
    const sub = (subregion) => subregion ? subregion : "no hay subregion"

    countriesDB.forEach(async c => {
        await Country.findOrCreate({
            where: {
                id: c.cca3,
                name: c.name.common, 
                flags: c.flags[0],
                region: c.region,
                capital: cap(c.capital),
                subregion: sub(c.subregion),
                area: c.area,
                poblacion: c.population,
            }, include : Activities
        })
    })
    
    const countriesReady = countriesDB.map(country => {
        return {
            name: country.name.common,
            id: country.cca3,
            flags: country.flags[0],
            region: country.region,
            capital: cap(country.capital),
            subregion: sub(country.subregion),
            area: country.area,
            poblacion: country.population,
            include : Activities
        }
    });
    // console.log(countriesReady)
    
    res.sendStatus(200);
    return countriesReady
})

router.get('/:idPais', async (req, res) => {
    const idPais = req.params.idPais.toUpperCase();
    // console.log(idPais, "id que traigo de params")

    try {
        
        const countryId = await Country.findOne({
            where: {
                id: idPais,
            },  
             include: Activities,
        })
        return res.json(countryId)
    } catch (error) {
        res.json(error)
    }

})

router.get('/', async (req, res) => {
    
})

router.post('/activities', async (req,res) => {
    const { name, difficult, duration, season, countries } = req.body;

    // console.log(countryId, 'id que llega de body')
    const newActivity = await Activities.create({
            name, 
            difficult,
            duration,
            season
    })
    
    const activityDb = await Country.findAll({
        where: {
            name: countries,  //No me lo toma por el id, pero por el nombre sí. 
        }
    })
    newActivity.addCountry(activityDb)  
    //   console.log(newActivity);
    res.json({msg: "Se ha creado la actividad con éxito!!!"})
})

module.exports = router;