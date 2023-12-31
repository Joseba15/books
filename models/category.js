const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
        unique: true
    },
    
})

module.exports = mongoose.model("Category", CategorySchema);
