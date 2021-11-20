/**
 * @param {request object} req
 * @param {response object} res
 * @desc remove a bootcamp
 * @route /api/v1/bootcamp/:id
 * @access Admin
 */

function deleteItem(req, res) {
  res.status(201).json({
    success: true,
    data: "deleted bootcamp data " + req.params.id,
  });
}

module.exports = deleteItem;
