const Bootcamp = require("../../models/Bootcamps");

/**
 * @param {request object} req
 * @param {response object} res
 * @desc add new bootcamp
 * @route /api/v1/bootcamp
 * @access User
 */

async function create(req, res) {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: { ...bootcamp },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      errors: error.code,
    });
  }
}

module.exports = create;
