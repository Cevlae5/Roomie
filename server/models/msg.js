const mongoose = require('mongoose');
const { Schema } = mongoose;

const MsgSchema = new Schema ({
    msg: { type:String, required:true },
    user: { type:String, required:true },
    username: { type:String, required: true },
    location: {type:String, required:true },
    lat: { type:String, required:true },
    long: { type:String, required:true },
    priority: { type:String, required:true },
    created_fecha: { type:String, required:true },
    created_hora: { type:String, required: true },
    img: { type:Boolean, required: true },
    status: { type:Number, required:true },
    visible: {type:Boolean, required: true }
}
)

module.exports = mongoose.model('Msg', MsgSchema);