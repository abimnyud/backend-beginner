const CustomError = require('../class/CustomError');
const registrationSchema = require('../schema/registration');

function getUserByIdFromQuery(req, res) {
  const { id } = req.query;
  console.log(id);
  res.send(id);
}

function getUserByIdFromParam(req, res) {
  const { id } = req.params;
  console.log(id);
  res.status(404).json({ id });
}

function register(req, res) {
  const { username, password } = req.body;

  const { error } = registrationSchema.validate({ username, password });

  if (error) throw new CustomError(error.message, 400);

  res.send({ username, password });
}

module.exports = {
  getUserByIdFromQuery,
  getUserByIdFromParam,
  register,
};
