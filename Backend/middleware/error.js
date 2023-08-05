let ErrorResponse = require("../utils/errorResponse");

let errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  //!Cast Error
  if (err.name === "CastError") {
    let message = `Resource not found ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //!Mongoose Duplicate value
  if (err.code === 11000) {
    let message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }
  //!Mongoose validation Error
  if (err.name === "ValidationError") {
    let message = Object.value(err.errors).map((val) => " " + val.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .send({ success: false, message: error.message || "server error" });
};

module.exports = errorHandler;
