const mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    price: {
        type: String
    },
    origin: {
        type: String
    },
    production: {
        type: String
    }
})



mongoose.model('Product', productSchema);