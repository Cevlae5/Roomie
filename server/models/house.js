const mongoose = require('mongoose');
const { Schema } = mongoose;

const HouseSchema = new Schema ({
    region:         { type:String, required:true },
    comuna:        { type:String, required:true },
    baths:     { type:Number, required:true },
    id_user :       { type:String, required:true }
})

module.exports = mongoose.model('House', UserSchema);