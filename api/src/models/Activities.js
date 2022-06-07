const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {

    name: {
        type: DataTypes.STRING,
        // allowNull: false,
    },

    difficult: {
        type: DataTypes.INTEGER,
        validate: {min: 1, max: 5},
        // allowNull: false,
    },
    
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    season: {
        type: DataTypes.ENUM('Summer','Outumn','Winter','Spring'),
        // allowNull: false,
    },
  }, {timestamp: false});
};  
