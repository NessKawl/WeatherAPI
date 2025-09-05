const express = require('express')
const climaRoutes = require('./routes/climaRoutes')
const cidadeRoutes = require('./routes/cidadeRoutes')
const estadoRoutes = require('./routes/estadoRoutes')

const cors = require("cors");

const app = express()

app.use(cors())

app.use(express.json())

app.use('/clima', climaRoutes)

app.use('/cidade', cidadeRoutes)

app.use('/estado', estadoRoutes)

module.exports = app;