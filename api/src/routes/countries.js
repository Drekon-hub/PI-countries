const { Router } = require('express');
const router = Router();
const axios = require ('axios');
const {Country, Activities} = require('../db')

// quise hacerlo modularizado pero me re confunde mal :c

// const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')

// const API = 'https://restcountries.com/v3.1/all'
// const countries = await axios(API

router.get('/', async (req, res) => {

    // const { name } = req.query

    // try{
    //     let allCountries = await getDbInfo();

    //     if(!allCountries.length) {
    //         const result = await CountriesDB();
    //         res.json(result);
    //     } else {
    //         if (!name) res.send(allCountries)
    //         else {
    //             let countryName = await allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
    //             if (!countryName.length){
    //                 res.sendStatus(404)
    //             } else {
    //                 res.send(countryName)
    //             }
    //         }
    //     }
    // }
    // catch(err) {
    //     res.status(404).json({msg: err})
    // }
    
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
            }
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
            // includes: Activities,
        })
        return res.json(countryId)
    } catch (error) {
        res.json(error)
    }

})



module.exports = router;