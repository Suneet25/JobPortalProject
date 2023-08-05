//?ErrorResponse here is a custom error we are creating and we are inheriting from the inbuilt class Error from the javascript.


class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
