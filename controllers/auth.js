const User = require("../models/user")
const bcryptjs = require('bcryptjs')
const { genJWT } = require('../helpers/genJWT')
const {request, response} = require('express')

const login = async(req=request, res=response) =>{


    const { email, password} = req.body
    const user = await User.findOne({email:email})
    const validPassword = bcryptjs.compareSync(password, user.password) 

    console.log(user);
    
    if(!user){
        res.status(400) .json( {mensage: 'El usuario no existe'})
    }  
    else if (!validPassword) {
            return res.status(400).json({mensage: 'La contraseña no es correcta'})
    }else{
        const token = await genJWT(user.uid);
        res.json({user,token})
    }   

}

module.exports = {login}