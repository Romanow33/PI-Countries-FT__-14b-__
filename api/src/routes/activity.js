const { Router } = require('express');
const router = Router();

const {Activity, Country} = require('../db')

router.post('/', async (req, res)=>{
    const { name, duration, season, dificulty, countryCode}= req.body;
    try{ const activityCreated = await Activity.create({ // áca cuando crea o encuentra devuelve un arreglo.
        name,
        duration,
        season,
        dificulty 
        });

await activityCreated.addCountry(countryCode);

return res.json({Mensaje:'Se ha agregado con éxito la actividad'});
}catch(err){
return res.sendStatus(400)
}})


module.exports= router; 