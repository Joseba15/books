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
    // try{
        const id = req.params.id
        const user = await User.findOneAndDelete({ _id: id });
        res.status(201).json(user);

    // }catch(err){
    //     res.status(500).json({msg: err})
    
    // }
   
}
  
  

module.exports = {getUsers,postUser,deleteUser}