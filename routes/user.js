const express = require("express");
const router = express.Router();
const {check}= require('express-validator')
const {getUsers,postUser,deleteUser} = require('../controllers/user.js');
const { validateFields } = require("../middlewares/validate-fields.js");

router.route('/') 
.get(getUsers)
.post([
  check ('username','username is required').not().isEmpty(),
  check ('password','password is required').not().isEmpty(),
  check('password', 'El password debe de ser más de 4 letras').isLength({ min: 4 }),
  validateFields
],postUser)
.delete('/:id',deleteUser)

module.exports= router;