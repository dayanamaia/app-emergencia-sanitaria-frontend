const TaxaMortalidade = require("../models/TaxaMortalidade");

module.exports = {
  async index(request, response) {

    const taxasMortalidade = await TaxaMortalidade.find();

    return response.json(taxasMortalidade);
  },
};
