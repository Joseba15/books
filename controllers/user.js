const User = require("../models/user");

const getUsers = async (req,res) =>{
    try{
        const user = await User.find();
        res.status(201).json(user);
      }catch(err){
        res.status(500).json({msg: err})
    
      }
}

const postUser = async (req, res) => {

 try{
    const { username,email,password,role } =req.body;

    const newUser = new User ({ username,email,password,role })

    await newUser.save();

    res.json({newUser});

 }catch(err){
    res.status(500).json({msg: err})

 }

}

const deleteUser = async (req, res) => {
     
    const id = req.params.id
    const user = await User.findById({ id });

    if (user) {
        const userDelete = await User.findByIdAndDelete({ _id: id })
        res.json({userDelete})
    }else{

        return res.status(400).json({
            msg: 'Usuario no existe'
        });
    }

    
}
  
  

module.exports = {getUsers,postUser,deleteUser}