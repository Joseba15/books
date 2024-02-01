const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({

    username: {
        type: String,
        required: [true, 'Username is mandatory'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is mandatory']
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
        emun: ['ADMIN', 'USER']
    },
    active: {
        type: Boolean
    }
})

module.exports = mongoose.model("User", UserSchema);