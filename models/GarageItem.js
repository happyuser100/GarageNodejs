const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageItemSchema = new Schema({
  _id: String,
  mispar_mosah: String,
  shem_mosah: String,
  cod_sug_mosah: Number,
  sug_mosah: String,
  ktovet: String,
  yishuv: String,
  telephone: String,
  mikud: Number,
  cod_miktzoa: Number,
  miktzoa: String,
  menahel_miktzoa: String,
  rasham_havarot: Number,
  TESTIME: String,
  createdAt: {
    image: String,
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Garage", garageItemSchema);
