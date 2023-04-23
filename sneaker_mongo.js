let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sneakerMongo = new Schema({
    modelo: String,
    talla: String,
    colorway: String,
    precio: Number,
    imagen: String
});
module.exports = mongoose.model("SNEAKERMONGO", sneakerMongo);