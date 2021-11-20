/**
 * @param {request object} req
 * @param {response object} res
 * @desc add new bootcamp
 * @route /api/v1/bootcamp
 * @access User
 */

function create(req, res) {
  res.status(201).json({
    success: true,
    data: "added bootcamp data " + req.params.id,
  });
}

module.exports = create;
