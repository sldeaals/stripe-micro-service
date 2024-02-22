// errorHandlers.js

// Custom error class for better error handling
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  // Set default status code if not provided
  const statusCode = err.statusCode || 500;

  // Log the error for debugging purposes
  console.error(err);

  // Send the error response to the client
  res.status(statusCode).json({
    error: {
      message: err.message,
      statusCode: statusCode,
    },
  });
};

module.exports = {
  CustomError,
  errorHandler,
};
