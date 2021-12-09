const Bootcamps = require("../../models/Bootcamps");
const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc remove a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

const deleteItem = asyncHandler(async (req, res) => {
  const bootCamp = await Bootcamps.findByIdAndDelete(req.params.id);
  res.status(201).json({
    success: true,
    data: `bootCamp ${req.params.id} is deleted`,
  });
});

module.exports = deleteItem;
