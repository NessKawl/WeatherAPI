const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('weather', 'root', '2102', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00', // 🔹 força salvar no horário de Brasília
    dialectOptions: {
        useUTC: false, // 🔹 não converte para UTC
    }
});

module.exports = sequelize;