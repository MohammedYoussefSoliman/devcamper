const Bootcamps = require("../../models/Bootcamps");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc update a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

const update = asyncHandler(async (req, res, next) => {
  const bootCamp = await Bootcamps.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    success: true,
    data: bootCamp,
  });
});

module.exports = update;
