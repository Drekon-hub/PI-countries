const { Router } = require('express');

const { TouristActivity, Country } = require('../db.js');

const router = Router();

router.post(
  '/activities',
  async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(404).send('Some fields need to be filled');
    }

    const newActivity = await TouristActivity.create({
      name,
      difficulty,
      duration,
      season,
      countries,
    });
    const activityDb = await Country.findAll({
      where: {
        name: countries, //No me lo toma por el id, pero por el nombre sí.
      },
    });
    newActivity.addCountry(activityDb);
    // console.log("");
    res.json({ msg: 'Se ha creado la actividad con éxito!!!' });
  }
  // const country = await Country.findByPk(countries);
  // await country.addTouristActivity(getId);
);

module.exports = router;
