const Bootcamp = require("../../models/Bootcamps");
const { asyncHandler } = require("../../middleware");
const geocoder = require("../../utils/geocoder");
/**
 * @param {request object} req
 * @param {response object} res
 * @param {response object} next
 * @desc add new bootcamp
 * @route /api/v1/bootcamp/radius/:zipCode/:distance
 * @access User
 */

const getBootCampInRadius = asyncHandler(async (req, res, next) => {
  const { zipCode, distance } = req.params;

  // get lat/lng data
  const earthRadius = 6378.1; // Km
  const radius = +distance / earthRadius;
  const location = await geocoder.geocode(zipCode);
  const { latitude, longitude } = location[0];
  const bootCamps = await Bootcamp.find({
    location: {
      $geoWithin: { $centerSphere: [[longitude, latitude], radius] },
    },
  });

  res.status(200).json({
    success: true,
    count: bootCamps.length,
    data: bootCamps,
  });
});

module.exports = getBootCampInRadius;
