/**
 * @param {request object} req
 * @param {response object} res
 * @desc update a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

function update(req, res) {
  res.status(201).json({
    success: true,
    data: "updated bootcamp data " + req.params.id,
  });
}

module.exports = update;
