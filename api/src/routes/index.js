
const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./country');
const activities  = require('./activity');
const { Country } = require('../db');
const url = ('https://restcountries.com/v3.1/all');


fetch(url).then( response => response.json() )
.then(data => data.map( c => Country.create ({
    id: c.cca3,
    name: c.name.official,
    imageFlag: c.flags.png,
    continent: c.region,
    capital: c.capital[0],
    subregion: c.subregion,
    area: c.area,
    population: c.population,
    })))
.catch(err=> console.log(err));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries);
router.use('/activity', activities);


module.exports = router;