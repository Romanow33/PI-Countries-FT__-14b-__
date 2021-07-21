const { Router } = require('express');
const router = Router();

const {Activity, Country} = require('../db')

router.post('/', async (req, res)=>{
     
    const { name, duration, season, dificulty, countryCode}= req.body;

 try  { const activityCreated = await Activity.create({ // áca cuando crea o encuentra devuelve un arreglo.
        name,
        duration,
        season,
        dificulty
    });

   await activityCreated.setCountries(countryCode);
   const find= await Activity.findOne({
       where:{
        name
       },
       include:{
         model:Country,
         attributes:['id'],
         through: {
            attributes: [],
          },
       }
    })
   return res.json({Mensaje:'Se ha agregado con éxito la actividad', actividadCreada:find}).status(200);
        } catch (err){}
   
})



 module.exports= router; 