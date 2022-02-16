const { asyncHandler } = require("../../middleware");
const Bootcamps = require("../../models/Bootcamps");
/**
 * @param {request object} req
 * @param {response object} res
 * @desc get all bootcamps available
 * @route /api/v1/bootcamp
 * @access Public
 */

const get = asyncHandler(async function (req, res, next) {
  let queryData;
  const queryString = JSON.stringify(req.query).replace(
    /\b(lt|lte|gt|gte|in)\b/g,
    (match) => `$${match}`
  );
  // determine none params keys
  const noneParams = ["select", "sort", "page", "limit"];
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

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Bootcamps.countDocuments();

  queryData.skip(startIndex).limit(limit);

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.previous = {
      page: page - 1,
      limit,
    };
  }

  // execute queryData
  const bootcamps = await queryData;
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
    pagination,
  });
});

module.exports = get;
