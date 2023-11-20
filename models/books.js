const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type : String,
        required: [true, 'Title is mandatory'],
        unique: true
    },
    author: {
        type : String,
        required: [true, 'Author is mandatory'],
    },
    pages: {
        type : Number,
        required: [true, 'Pages is mandatory'],
    },
    price: {
        type : Number,
        required: [true, 'Price is mandatory'],
    },
    idCategory: {
        type : Number,
        required: [true, 'Id Category is mandatory'],
    },
})

module.exports = mongoose.model("Book", BooksSchema);