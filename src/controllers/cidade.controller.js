const axios = require('axios')

const getCidade = async (req, res) => {

    const { uf } = req.query;
    if (!uf) return res.status(400).json({ error: "Estado é obrigatória" });

    try {
        const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)

        const cidades = data.map(c => c.nome).sort((a, b) => a.localeCompare(b))
        res.json(cidades)
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getCidade };