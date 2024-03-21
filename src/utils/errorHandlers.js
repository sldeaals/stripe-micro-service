class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err);

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
