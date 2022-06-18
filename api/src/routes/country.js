const { Router } = require('express');
const axios = require('axios')

const { Country, TouristActivity } = require('../db.js');

const router = Router();

const getDbInfo = async () => {
    return await Country.findAll({
          include: { //! TouristActivity
            model: TouristActivity,
            attributes: [ 'name', 'difficulty', 'duration', 'season',],
            through: { 
                attributes: [], 
                },
            }
    })
}

const getAllActivities = async (req, res) => {
 
    const allActivities = await TouristActivity.findAll();

    if (allActivities) {
      res.json(allActivities);
    } else {
      res.status(404).json({ message: "No se han encontrado actividades." });
    }
  
};
router.get('/countries/allActivities', getAllActivities)

const CountriesDB = async() => {
    const countriesAPI = await axios.get('https://restcountries.com/v3/all');   
    const countries = countriesAPI.data; 
    let comodin2 = ""
    const cap = (capital) =>  capital ? comodin2.concat(capital) : "no hay capital" 
    const sub = (subregion) => subregion ? subregion : "no hay subregion"

    countries.forEach(async c => {
        await Country.findOrCreate({
            where: {
                id: c.cca3,
                name: c.name.common, 
                flag: c.flags[1],
                subregion: c.subregion,
                continent: c.continents[0],
                capital: cap(c.capital),
                subregion: sub(c.subregion),
                area: c.area,
                population: c.population,
            }, include: TouristActivity
        })
    })
    
    const countriesReady = countries.map(country => {
        return{
            name: country.name.common,
            id: country.cca3,
            flag: country.flags[1],
            subregion: country.subregion,
            continent: country.continents[0],
            capital: cap(country.capital),
            subregion: sub(country.subregion),
            area: country.area,
            population: country.population,
            include: TouristActivity
        }
    });
    return countriesReady
}


router.get('/countries', async (req, res) => {
    const { name } = req.query  
    try{
    let allCountries = await getDbInfo();
    if (!allCountries.length){
        const result = await CountriesDB();
        res.json(result)
    } else {
        if (!name) res.send(allCountries)
        else {
            
            let countryName = await allCountries.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
            if (!countryName.length){
                res.sendStatus(404)
            } else {
                res.send(countryName)
            }
        }
    }   
    }
    catch(err){
        res.status(404).json ({msg:err})
    }
});

//! GET /countries/{idPais}:
router.get('/countries/:idPais', async (req, res) => {
    const { idPais } = req.params;
    
    try {
        const country = await Country.findOne({
            where: {
                id:  idPais.toUpperCase()
            }, 
             include: TouristActivity
        })
        if(country) {
            return res.status(200).json(country);
        } else {
            return res.status(404).send("Country not found!");
        } 
    } catch (error) {
        console.log(error)
    }
    
});
  
module.exports = router;