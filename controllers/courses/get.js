const { asyncHandler, queryHandler } = require("../../middleware");
const Courses = require("../../models/Courses");
const { Is } = require("flk-supportive-is");

/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all courses associated with a bootcamp or not.
 * @route /api/v1/:bootcampId/courses
 * @route /api/v1/courses
 * @access Public
 */

const get = asyncHandler(async function (req, res, next) {
  let coursesQuery;
  const { bootcampId } = req.params;
  if (bootcampId) {
    coursesQuery = Courses.find({ bootcampId });
  } else {
    coursesQuery = Courses.find();
  }

  let data;
  if (!Is.empty(req.query)) {
    data = await queryHandler(coursesQuery, req.query);
  } else {
    data = await coursesQuery;
  }

  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
});

module.exports = get;
