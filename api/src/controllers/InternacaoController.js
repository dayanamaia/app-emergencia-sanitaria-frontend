const Internacao = require("../models/Internacao");

module.exports = {
  async index(request, response) {
    const internacoes = await Internacao.find();

    return response.json(internacoes);
  },

  async show(request, response) {
    const { regiao } = request.params;

    const internacoes = await Internacao.find({
      "Região/UF": regiao,
    });

    return response.json(internacoes);
  },
};
