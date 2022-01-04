const express = require("express");
const router = express.Router();
const {
  get,
  getSingle,
  create,
  update,
  remove,
  getBootCampInRadius,
} = require("../controllers/bootcamp");

router.route("/").get(get).post(create);
router.route("/:id").get(getSingle).put(update).delete(remove);
router.route("/radius/:zipCode/:distance").get(getBootCampInRadius);

module.exports = router;
