const { request, response} = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const validateJWT = async (req=request, res=response, next) => {
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }
    try{
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(uid)
        console.log(user);
        if(!user){
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe'
            })  
        }
        if (!user.active) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado inactivo'
            })
        }
        req.user = user;
        next();

    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    validateJWT
}