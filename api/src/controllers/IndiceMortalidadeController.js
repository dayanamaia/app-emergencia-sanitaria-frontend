const TaxaMortalidade = require("../models/TaxaMortalidade");

module.exports = {
  async show(request, response) {
    const { mes, regiao } = request.params;

    const query = [];

    for (let i = 2010; i < 2021; i++) {
      query.push(`${i}/${mes}`);
    }
    query.push("-_id");

    const taxasMortalidade = await TaxaMortalidade.find({
      "Região/UF": regiao,
    }).select(query);

    const taxaMortalidadeObj = JSON.parse(JSON.stringify(taxasMortalidade[0]));

    query.pop();
    const sumTaxaMortalidade = query.reduce(
      (sum, value) => sum + taxaMortalidadeObj[value],
      0
    );
    // query.map((value) => console.log(taxaMortalidadeObj[value]));
    const averageTaxaMortalidade = sumTaxaMortalidade / 10;

    const maxTaxaMortalidade = query.reduce((prev, current) => {
      return prev > taxaMortalidadeObj[current]
        ? prev
        : taxaMortalidadeObj[current];
    });

    const minTaxaMortalidade = query.reduce((prev, current) => {
      return prev < taxaMortalidadeObj[current]
        ? prev
        : taxaMortalidadeObj[current];
    });

    // taxa de mortalidade do mês comparado
    const k =
      taxaMortalidadeObj[
        Object.keys(taxaMortalidadeObj)[
          Object.keys(taxaMortalidadeObj).length - 1
        ]
      ];

    // mortalidade esperada
    const x = averageTaxaMortalidade;

    // desvio considerável
    const y = maxTaxaMortalidade - minTaxaMortalidade;

    let resultado = "";

    if (k <= x + y) resultado = "Mortalidade normal";
    if (x + 2 * y > k > x + y) resultado = "Mortalidade anormalmente alta";
    if (k >= x + 2 * y) resultado = "Mortalidade pandêmica";

    return response.json({ resultadoCalculo: resultado });
  },
};
