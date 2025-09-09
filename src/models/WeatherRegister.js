const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const WeatherRegister = sequelize.define('WeatherRegister', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // date: {
    //     type: DataTypes.TIME,
    //     allowNull: false
    // },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temp: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    sky: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'weather_register',
});

module.exports = WeatherRegister;