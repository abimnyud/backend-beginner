module.exports = (req, res, next) => {
  console.log(`Time: ${new Date()}`);
  next();
};
