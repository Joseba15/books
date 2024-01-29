const express = require('express');
const router = express.Router();
const {check}= require('express-validator')
const { validateFields } = require("../middlewares/validate-fields.js");
const {getUsers,postUser,deleteUser,getUser,updateUser} = require('../controllers/user.js');

router.get('/:id',[
  check('id','Tiene que ser un id valido').isMongoId(),
  validateFields],
getUser);

router.get('/', getUsers);


router.post('/',[
  check ('username','username is required').not().isEmpty(),
  check ('password','password is required').not().isEmpty(),
  check('password', 'El password debe de ser más de 4 letras').isLength({ min: 4 }),
  check('email', 'El correo es requerido').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail(),
  validateFields
],postUser);

router.delete('/:id',[
  check('id','Tiene que ser un id valido').isMongoId()
],deleteUser);


router.put('/:id', [
  check('id','Tiene que ser un id valido').isMongoId(),
  check ('username','username es requerida').not().isEmpty(),
  check('password', 'la contraseña es requerida').not().isEmpty(),
  check('password', 'El password debe de ser más de 4 letras').isLength({ min: 4 }),
  check('email', 'El correo es requerido').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail() ,
  validateFields
],updateUser );

module.exports= router;