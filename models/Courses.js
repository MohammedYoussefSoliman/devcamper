const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Course description is required"],
  },
  tuition: {
    type: Number,
    required: [true, "Course tuition is required"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please select your skill level"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarShipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcampId: {
    type: mongoose.Schema.ObjectId,
    ref: "Bootcamp",
    required: [true, "Please select courses' bootcamp"],
  },
});

module.exports = mongoose.model("Course", CourseSchema);
