const Courses = require("../../models/Courses");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc add new course
 * @route /api/v1/courses
 * @access User
 */

const create = asyncHandler(async (req, res, next) => {
  const course = await Courses.create(req.body);
  res.status(201).json({
    success: true,
    data: { ...course },
  });
});

module.exports = create;
