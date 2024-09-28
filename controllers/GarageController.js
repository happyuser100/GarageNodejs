const garageService = require("../services/GarageService");

exports.getAllAPIGarages = async (req, res) => {
  try {
    const garages = await garageService.getAllAPIGarages();
    res.json({ data: garages.data.result.records, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAllGarages = async (req, res) => {
  try {
    await garageService.createAllGarages();
    res.json({ status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllGarages = async (req, res) => {
  try {
    const garages = await garageService.getAllGarages();
    res.json({ data: garages, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGarage = async (req, res) => {
  try {
    const garage = await garageService.createGarage(req.body);
    res.json({ data: garage, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGarageById = async (req, res) => {
  try {
    const garage = await garageService.getGarageById(req.params.id);
    res.json({ data: garage, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGarage = async (req, res) => {
  try {
    const garage = await garageService.updateGarage(req.params.id, req.body);
    res.json({ data: garage, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteGarage = async (req, res) => {
  try {
    const garage = await garageService.deleteGarage(req.params.id);
    res.json({ data: garage, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
