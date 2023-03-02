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
  // hash password
  // save database
  //   throw new Error('Error');

  res.send({ username, password });
}

module.exports = {
  getUserByIdFromQuery,
  getUserByIdFromParam,
  register,
};
