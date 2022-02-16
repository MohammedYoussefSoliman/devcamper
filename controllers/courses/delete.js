const Courses = require("../../models/Courses");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc delete a course
 * @route /api/v1/courses/:id
 * @access Admin
 */

const deleteItem = asyncHandler(async (req, res) => {
  await Courses.findByIdAndDelete(req.params.id);
  res.status(201).json({
    success: true,
    data: `course ${req.params.id} is deleted`,
  });
});

module.exports = deleteItem;
