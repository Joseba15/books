const User = require("../models/user");

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
    const user = await User.findById(id);

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
    const userRole = 'USER'
    const userByEmail = await User.findOne({email});
    const userByUsername = await User.findOne({username});


    const newUser = new User ({ username,name,email,password,userRole })

    if(userByEmail==null || userByUsername==null){
        await newUser.save();

        res.json({newUser});

    }else{
        res.status(500).json({msg: 'Usuario con el correo/nombre de usuario registrado '})

    }

}



const deleteUser = async (req, res) => {
     
    const id = req.params.id
    const user = await User.findById( id );

    if (user) {
        const userDelete = await User.findOneAndDelete({ "_id": id })
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