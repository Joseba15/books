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
        requirede: true,
        emun: ['ADMIN', 'USER']
    },
    active: {
        type: Boolean
    }
})


UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = mongoose.model("User", UserSchema);