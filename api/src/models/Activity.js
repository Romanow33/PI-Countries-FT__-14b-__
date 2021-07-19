const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        },
    duration:{
        type: DataTypes.ENUM,
        values:['1','2','3','4','5'],
        allowNull:false
        },
    season:{
        type: DataTypes.ENUM,// ENUM opciones cerradas para el usuario.
        values: ["summer", "autumn","winter","spring"],
        allowNull:false 
        },
    dificulty:{
        type: DataTypes.ENUM,
        values:['Alta', 'Medio Alta', 'Medio', 'Medio Baja', 'Baja'],
        allowNull:false 
        }
    });
};