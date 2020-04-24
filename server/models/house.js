const mongoose = require('mongoose');
const { Schema } = mongoose;

const HouseSchema = new Schema ({
    region : { type:String, required:true },
    city : { type:String, required:true },
    commune : { type:String, required:true },
    price : { type:Number, required:true },
    room : { type:Number, required:true },
    bathroom_qtity : { type:Number, required:true },
    id_user : { type:String, required:true },
})

module.exports = mongoose.model('House', UserSchema);