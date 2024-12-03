import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true,
    },
    userID: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    hash: {
        type: String,
        unique: true,
        required: true,
    },
    salt: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
    dob: {
        type: String,
    },
    following: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User'
    },
    followers: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User'
    }
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

export default User;