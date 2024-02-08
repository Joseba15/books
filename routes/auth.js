const express = require('express')
const router = express.Router()
const {login,renew} = require('../controllers/auth')
const { check } = require('express-validator')
const { validateFields } = require("../middlewares/validate-fields.js");
const { validateJWT } = require('../middlewares/validate-jwt');


router.post('/login',[
    check('email', 'El correo es requerido').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('password','password is required').not().isEmpty(),
    check('password', 
    'debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un caracter especial')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    validateFields
], login );

router.get('/renew',[validateJWT],renew);



module.exports = router