const mongoose = require("mongoose");

const InternacaoSchema = new mongoose.Schema();

module.exports = mongoose.model("internacoes", InternacaoSchema);
