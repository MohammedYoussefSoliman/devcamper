const { asyncHandler } = require("../../middleware");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all bootcamps available
 * @route /api/v1/bootcamp
 * @access Public
 */
const Bootcamps = require("../../models/Bootcamps");

const get = asyncHandler(async function (req, res, next) {
  let queryData;
  const queryString = JSON.stringify(req.query).replace(
    /\b(lt|lte|gt|gte|in)\b/g,
    (match) => `$${match}`
  );
  // determine none params keys
  const noneParams = ["select", "sort"];
  noneParams.forEach((param) => delete queryString[param]);

  const query = JSON.parse(queryString);
  queryData = Bootcamps.find(query);

  if (req.query.select) {
    const selectFields = req.query.select.split(",").join(" ");
    queryData.select(selectFields);
  }

  if (req.query.sort) {
    const selectFields = req.query.sort.split(",").join(" ");
    queryData.sort(selectFields);
  }

  // excute queryData
  const bootcamps = await queryData;
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});

module.exports = get;
