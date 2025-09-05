const axios = require('axios')
require('dotenv').config()

const apiKey = process.env.API_KEY;

const getClima = async (req, res) => {

    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "Cidade é obrigatória" });

    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(response => {

        const data = response.data;

        res.json({
            cidade: data.name,
            temperatura: data.main.temp,
            sensacao: data.main.feels_like,
            descricao: data.weather[0].description
        });
    }).catch(error => {
        console.log(error);
    })

}

module.exports = { getClima };