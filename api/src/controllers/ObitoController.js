const Obito = require("../models/Obito");

module.exports = {
  async index(request, response) {
    const obitos = await Obito.find();

    return response.json(obitos);
  },

  async show(request, response) {
    const { regiao } = request.params;

    const obitos = await Obito.find({
      "Região/UF": regiao,
    });

    return response.json(obitos);
  },
};
