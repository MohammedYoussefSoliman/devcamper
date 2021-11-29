/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all bootcamps available
 * @route /api/v1/bootcamp
 * @access Public
 */
const Bootcamps = require("../../models/Bootcamps");

async function get(req, res) {
  try {
    const bootcamps = await Bootcamps.find();
    res.status(200).json({
      success: true,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      errors: "an error occured",
    });
  }
}

module.exports = get;
