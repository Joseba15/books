const User = require("../models/user");
const bcryptjs = require('bcryptjs')
const { validPassword } = require("../helpers/db-validators.js");

const getUsers = async (req,res) =>{
    try{
        const user = await User.find();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({msg: err})
    
    }
}

const getUser = async (req =request,res= response) =>{
    const id = req.params.id

    if (user) {
        
        res.status(201).json({user})
    }else{

        return res.status(400).json({
            msg: 'Usuario no existe'
        });
    }
}

const postUser = async (req, res) => {

 
    const { username,name,email,password } =req.body;
    const role = 'USER'
    const active = true;


    const newUser = new User ({ username,name,email,password,role,active })
    
    try {
        // const isPasswordValid = await validPassword(password);
        const salt = bcryptjs.genSaltSync();
        newUser.password = bcryptjs.hashSync( password, salt );

        await newUser.save();
    
        res.json({newUser});
        
    } catch (error) {
        if(error.keyValue.email){
            res.status(500).json({msg: "usuario con email repetido"})
        }else if(error.keyValue.username){
            res.status(500).json({msg: "usuario con nombre de usuario repetido"})
        }
    }

    

}



const deleteUser = async (req, res) => {
     
    const id = req.params.id
    const user = await User.findById( id );

    if (user) {
        // const userDelete = await User.findOneAndDelete({ "_id": id })
        // res.json({userDelete})
        const body= {active: false};
        const userDelete = await User.findByIdAndUpdate(id,body )
        res.json({userDelete})
    }else{

        return res.status(400).json({
            msg: 'Usuario no existe'
        });
    }

    
}
  
const updateUser = async (req ,res) => {
    const id = req.params.id;

    const userFind = await User.findById(id);
    // const aux = await Film.findOne({ "email": email });

    if(userFind==null ){
        return res.status(400).json({
            msg: 'Usuario no existe'
        });
    }else{
        const body= req.body;
        const user = await User.findByIdAndUpdate(id,body)
    
        res.json(user)

    }

}
  

module.exports = {getUsers,getUser,postUser,deleteUser,updateUser}