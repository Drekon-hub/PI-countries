const axios = require ('axios');
const {Country, Activities} = require('../db')

// const getDbInfo = async () => {
//     return await Country.findAll({
//         include: {
//             model: Activities,
//             attributes: ['name', 'difficult', 'duration', 'season'],
//             through: {
//                 attributes: [],
//             },      
//         }
//     })
// }

const CountriesDB = async () => {
    const countryAPI = await axios.get('https://restcountries.com/v3/all');
    const countries = countryAPI.data;

    let comodin2 = ''

    const cap = (caapital) => capital ? comodin2.concat(caapital) : 'No hay capital';
    const sub = (subregion) => subregion ? subregion : "No hay subregion";

    country.forEach(async c => {
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
            },
            // include: Activity
        })
    })

    const countriesIsReady = countries.map(country => {
        return {
            id: country.cca3,
            name: country.name.common, 
            flags: country.flags[0],
            region: country.region,
            capital: cap(country.capital),
            subregion: sub(country.subregion),
            area: country.area,
            poblacion: country.population,
            // include: Activity
        }
    });
    return countriesIsReady
}

module.exports = {
    // getDbInfo,
    CountriesDB,
}