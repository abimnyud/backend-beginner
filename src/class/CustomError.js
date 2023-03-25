class CustomError extends Error {
  constructor(message, HTTPErrorCode) {
    super(message);
    this.HTTPErrorCode = HTTPErrorCode;
  }
}

module.exports = CustomError;
