const axios = require('axios')

const getEstado = async (req, res) => {

    try {
        const { data } = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

        const estados = data.map(e => ({ sigla: e.sigla, nome: e.nome })).sort((a, b) => a.nome.localeCompare(b.nome))
        res.json(estados)
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getEstado };