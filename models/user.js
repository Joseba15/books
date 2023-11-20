const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({

    username: {
        type: String,
        required: [true, 'Username is mandatory']
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory'],
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN', 'USER']
    },
})

module.exports = mongoose.model("User", UserSchema);