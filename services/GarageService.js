const GarageModel = require("../models/GarageItem");
const axios = require('axios');

const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=5"

exports.getAllAPIGarages = async () => {
     return await axios(url);
 };

exports.getAllGarages = async () => {
  return await GarageModel.find();
};

exports.createAllGarages = async () => {
  const garages = await axios(url);
  const records =  garages.data.result.records;

  await Promise.all(records.map(async (garage) => {
    await GarageModel.create(garage); 
  }))
};

exports.createGarage = async (garage) => {
  return await GarageModel.create(garage);
};

exports.getGarageById = async (id) => {
  return await GarageModel.findById(id);
};

exports.updateGarage = async (id, garage) => {
  return await GarageModel.findByIdAndUpdate(id, garage);
};

exports.deleteGarage = async (id) => {
  return await GarageModel.findByIdAndDelete(id);
};
