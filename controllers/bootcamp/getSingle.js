const { asyncHandler } = require("../../middleware");

/**
 * @param {request object} req
 * @param {response object} res
 * @desc get a single bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

const Bootcamps = require("../../models/Bootcamps");
const ErrorResponse = require("../../utils/ErrorResponse");

const getSingle = asyncHandler(async function (req, res, next) {
  const bootcamp = await Bootcamps.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `the bootcamp ${req.params.id} is not found in our database`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

module.exports = getSingle;
