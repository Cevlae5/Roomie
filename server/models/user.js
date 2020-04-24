const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    user: { type:String, required:true },
    password: { type:String, required:true },
    email: { type:String , required:true },
    about: { type: String, required:false },
    age: { type:String, required:true },
    ocupation: { type: String, required:true },
    gender: { type:String, required:true },
    gender_lookfor: { type:String, required: true }, 
    permission: { type: String, required:true },
    img: { type:Boolean, required:true },
    os: { type: String, required: true },
    update: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema);