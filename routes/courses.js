const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  get,
  getSingle,
  create,
  update,
  remove,
} = require("../controllers/courses");

router.route("/").get(get).post(create);
router.route("/:id").get(getSingle).put(update).delete(remove);

module.exports = router;
