const Obito = require("../models/Obito");

module.exports = {
  async index(request, response) {
    const obitos = await Obito.find();

    return response.json(obitos);
  },
};
