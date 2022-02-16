const Courses = require("../../models/Courses");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc update a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

const update = asyncHandler(async (req, res, next) => {
  const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    success: true,
    data: course,
  });
});

module.exports = update;
