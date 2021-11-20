/**
 * @param {request object} req
 * @param {response object} res
 * @desc get a single bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

function getSingle(req, res) {
  res.status(200).json({
    success: true,
    data: "show single bootcamp data " + req.params.id,
  });
}

module.exports = getSingle;
