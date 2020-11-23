const TaxaMortalidade = require("../models/TaxaMortalidade");

module.exports = {
  async index(request, response) {
    const taxasMortalidade = await TaxaMortalidade.find();

    return response.json(taxasMortalidade);
  },

  async show(request, response) {
    const { regiao } = request.params;

    const taxasMortalidade = await TaxaMortalidade.find({
      "Região/UF": regiao,
    });

    return response.json(taxasMortalidade);
  },
};
