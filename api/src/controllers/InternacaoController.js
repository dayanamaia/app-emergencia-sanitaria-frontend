const Internacao = require("../models/Internacao");

module.exports = {
  async index(request, response) {
    const internacoes = await Internacao.find();

    return response.json(internacoes);
  },
};
