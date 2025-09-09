const express = require('express')
const climaRoutes = require('./routes/climaRoutes')
const cidadeRoutes = require('./routes/cidadeRoutes')
const estadoRoutes = require('./routes/estadoRoutes')

const sequelize = require('./config/db')

sequelize.authenticate()
    .then((res) => {
        console.log('Conectado a database com sucesso!')
    }).catch((err) => {
        console.error('Erro ao conectar a database!', err)
    });


const cors = require("cors");

const app = express()

app.use(cors())

app.use(express.json())

app.use('/clima', climaRoutes)

app.use('/cidade', cidadeRoutes)

app.use('/estado', estadoRoutes)

module.exports = app;