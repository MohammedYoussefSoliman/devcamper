/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all bootcamps available
 * @route /api/v1/bootcamp
 * @access Public
 */

function get(req, res) {
  res.status(200).json({
    success: true,
    data: "show bootcamp data",
  });
}

module.exports = get;
