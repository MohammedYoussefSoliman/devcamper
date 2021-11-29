/**
 * @param {request object} req
 * @param {response object} res
 * @desc get a single bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

const Bootcamps = require("../../models/Bootcamps");

async function getSingle(req, res) {
  try {
    const bootcamp = await Bootcamps.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        error: "bootcamp not found",
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: "some bloody error occurred ",
    });
  }
}

module.exports = getSingle;
