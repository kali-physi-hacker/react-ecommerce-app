const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    is_superuser: {
        type: Boolean,
        default: false
    },
    profile_photo: String,
});

userSchema.set('toJSON', {
    transform: (document, returnedObjects) => {
        returnedObjects.id = returnedObjects._id.toString();
        delete returnedObjects._id
        delete returnedObjects.__v
        delete returnedObjects.password
    }
})

module.exports = mongoose.model('User', userSchema);