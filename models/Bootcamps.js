const Mongoose = require("mongoose");

const Schema = new Mongoose.Schema({
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
    minlength: [
      70,
      "the bootcamp description must not be less than 70 character",
    ],
    maxlength: [500, "the bootcamp description must not exceed 500 character"],
  },
  website: {
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please add a valid URL",
    ],
  },
  formatedAddress: {
    type: String,
    required: [true, "a address is required"],
  },
  street: String,
  city: String,
  zipCode: String,
  country: String,
  phoneNumber: {
    type: Number,
    required: [true, "a phoneNumber is required"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
  },
  careers: {
    type: [String],
    enum: [
      "web development",
      "mobile development",
      "Ui/UX",
      "Business Development",
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

module.exports = Mongoose.model("Bootcamp", Schema);
