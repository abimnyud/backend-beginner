const express = require('express');
const hello = require('../controller/hello');
const {
  getUserByIdFromQuery,
  getUserByIdFromParam,
  register,
} = require('../controller/user');
const logTime = require('../middleware/logTime');

const router = express.Router();

router.get('/hello', hello);

/*
 * Router statis
 */
// Router by Query
router.get('/user', getUserByIdFromQuery);

/*
 * Router dinamis
 */
// Router by Parameter
router.get('/user/:id', logTime, getUserByIdFromParam);

// Post body
router.post('/user/register', register);

module.exports = router;
