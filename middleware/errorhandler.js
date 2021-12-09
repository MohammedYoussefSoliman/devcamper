const ErrorResponse = require("../utils/ErrorResponse");
const { Is } = require("flk-supportive-is");

const errorHandler = (error, req, res, next) => {
  let currentError = { ...error };
  currentError.message = error.message;

  // mongoose bad objectId

  if (currentError.name === "castError") {
    currentError = new ErrorResponse(
      `Entered field not found with id ${currentError.value}`,
      404
    );
  }

  // mongoose duplicate resource

  if (currentError.code && currentError.code === 11000) {
    currentError = new ErrorResponse(`Duplicate field entered`, 400);
  }

  // mongoose validation error

  if (!Is.empty(currentError.errors)) {
    const message = Object.values(currentError.errors)
      .map((value) => value.message)
      .join(", ");
    currentError = new ErrorResponse(message, 400);
  }

  if (!currentError.statusCode) {
    currentError = new ErrorResponse(
      currentError.reason || currentError.message,
      500
    );
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: currentError.message || currentError.reason || "server error",
  });
};

module.exports = errorHandler;
