const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");
const { Schema } = mongoose;

const BootcampSchema = new Schema({
  name: {
    type: String,
    required: [true, "bootcamp name is required"],
    maxlength: [50, "the bootcamp name must not exceed 50 character"],
    unique: true,
    trim: true,
  },
  slug: String,
  description: {
    type: String,
    required: [true, "a description is required"],
    // minlength: [
    //   70,
    //   "the bootcamp description must not be less than 70 character",
    // ],
    maxlength: [500, "the bootcamp description must not exceed 500 character"],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please add a valid URL",
    ],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "a address is required"],
  },
  phone: {
    type: String,
    required: [true, "a phoneNumber is required"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
      // required: true,
    },
    street: String,
    streetNumber: String,
    city: String,
    zipCode: String,
    stateCode: String,
    country: String,
  },
  careers: {
    type: [String],
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Business",
      "Data Science",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must not be more than 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "placeholder-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BootcampSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

BootcampSchema.pre("save", async function (next) {
  const location = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [location[0].longitude, location[0].latitude],
    formattedAddress: location[0].formattedAddress,
    street: location[0].streetName,
    streetNumber: location[0].streetNumber,
    zipCode: location[0].zipcode,
    country: location[0].countryCode,
    stateCode: location[0].stateCode,
    city: location[0].city,
  };
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
