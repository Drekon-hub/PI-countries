const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {

    id: {
        type: DataTypes.STRING(3),
        unique: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false,
    },
    
    duration: {
        type: DataTypes.FLOAT,
    },

    season: {
        type: DataTypes.ENUM('Summer','fall','winter','spring'),
        allowNull: false,
    }
  });
};  
