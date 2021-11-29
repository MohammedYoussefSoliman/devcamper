const Bootcamps = require("../../models/Bootcamps");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc update a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

async function update(req, res) {
  try {
    const bootCamp = await Bootcamps.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(201).json({
      success: true,
      data: bootCamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "some bloody error occurred ",
    });
  }
}

module.exports = update;
