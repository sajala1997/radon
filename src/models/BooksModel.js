const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    name : String,
    author_id: {
        type: String,
        required: true  
     },
    price: Number,
    rating: Number

}, { timestamps: true 
    
});

module.exports = mongoose.model('Bookk', booksSchema) //books