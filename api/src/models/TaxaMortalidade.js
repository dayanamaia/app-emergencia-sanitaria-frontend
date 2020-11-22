const mongoose = require("mongoose");

const TaxaMortalidadeSchema = new mongoose.Schema();

module.exports = mongoose.model("taxasmortalidades", TaxaMortalidadeSchema);
