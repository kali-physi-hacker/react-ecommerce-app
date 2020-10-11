const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    image: {
        type: String,
        required: true,
    },
    category: {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: false
        },
    }
})

productSchema.set('toJSON', {
    transform: (document, returnedObjects) => {
        returnedObjects.id = returnedObjects._id.toString();
        delete returnedObjects._id;
        delete returnedObjects.__v;
    }
});


module.exports = mongoose.model('Product', productSchema);