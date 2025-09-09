const axios = require('axios')
const WeatherRegister = require('../models/WeatherRegister')

async function importarClima() {
    try {
        const res = await axios.get('http://localhost:3000/clima')



        await WeatherRegister.create({
            city: res.data.cidade,
            temp: res.data.temperatura,
            sky: res.data.descricao
        })


        console.log('Clima importado com sucesso');
    } catch (err) {
        console.log('ERRO AO IMPORTAR CLIMA', err)
    }
}

module.exports = { importarClima };
