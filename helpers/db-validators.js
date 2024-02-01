const User = require('../models/user');

// const existEmail = async (email) =>{
    
// }


const validPassword = async (password) => {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const res=false;

    if (regex.test(password)) {
        return res=true;
    }
}


module.exports = {validPassword}