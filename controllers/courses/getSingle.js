const { asyncHandler } = require("../../middleware");
const Courses = require("../../models/Courses");

/**
 * @param {request object} req
 * @param {response object} res
 * @desc get a single course.
 * @route /api/v1/courses/:id
 * @access Public
 */

const get = asyncHandler(async function (req, res, next) {
  let course;
  const { id } = req.params;
  course = await Courses.findById(id);

  res.status(200).json({
    success: true,
    data: course,
  });
});

module.exports = get;
