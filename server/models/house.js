const mongoose = require('mongoose');
const { Schema } = mongoose;

const HouseSchema = new Schema ({
    region:         { type:String, required:true },
    commune:        { type:String, required:true },
    bath_qtity:     { type:Number, required:true },
    id_user :       { type:String, required:true }
})

module.exports = mongoose.model('House', UserSchema);