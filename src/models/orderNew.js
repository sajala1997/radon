const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    
    userId : {
        type : ObjectId,
        ref: 'prouser'
    },
    productId : {
        type : ObjectId,
        ref: 'proproduct'
    },
    isFreeAppUser : Boolean,
    date : String

   
}, { timestamps: true });

module.exports = mongoose.model('proorder', orderSchema) //users