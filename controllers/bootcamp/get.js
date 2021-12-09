const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all bootcamps available
 * @route /api/v1/bootcamp
 * @access Public
 */
const Bootcamps = require("../../models/Bootcamps");

const get = asyncHandler(async function (req, res) {
  const bootcamps = await Bootcamps.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
});

module.exports = get;
