const mongoose = require("mongoose");

const ObitoSchema = new mongoose.Schema();

module.exports = mongoose.model("obitos", ObitoSchema);
