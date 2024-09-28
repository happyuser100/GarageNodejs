const express = require("express");
const {
  getAllAPIGarages,  
  createAllGarages,
  getAllGarages,
  createGarage,
  getGarageById,
  updateGarage,
  deleteGarage,
} = require("../controllers/GarageController");

const router = express.Router();

router.route("/").get(getAllAPIGarages);
router.route("/").post(createAllGarages);
router.route("/getAllGarages").get(getAllGarages)
router.route("/createGarage").post(createGarage);
router.route("/:id").get(getGarageById).put(updateGarage).delete(deleteGarage);

module.exports = router;
