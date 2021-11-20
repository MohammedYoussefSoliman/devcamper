const express = require("express");
const router = express.Router();
const {
  get,
  getSingle,
  create,
  update,
  remove,
} = require("../controllers/bootcamp");

router.route("/").get(get);
router.route("/:id").get(getSingle).post(create).put(update).delete(remove);

module.exports = router;
