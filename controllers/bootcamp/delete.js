const Bootcamps = require("../../models/Bootcamps");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc remove a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

async function deleteItem(req, res) {
  try {
    const bootCamp = await Bootcamps.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
      data: `bootCamp ${req.params.id} is deleted`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "some bloody error occurred ",
    });
  }
}

module.exports = deleteItem;
