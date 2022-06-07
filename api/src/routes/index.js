const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activities = require('./activities.js');
const countries = require('./countries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/countries', countries)

router.use('/countries', countries) 
router.use('/activities', activities)

module.exports = router;
