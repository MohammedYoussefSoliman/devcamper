const Bootcamp = require("../../models/Bootcamps");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc add new bootcamp
 * @route /api/v1/bootcamp
 * @access User
 */

const create = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: { ...bootcamp },
  });
});

module.exports = create;
