// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  res.status(err.HTTPErrorCode || 500).json({
    message: err.message,
  });
};
