const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema ({
    bed:            { type:String, required:true },
    bed_size:       { type:String, required:true },
    room_size:      { type:String, required:true },
    private_bath:   { type:Boolean, required:true },
    tv:             { type:Boolean, required:true },
    internet:       { type:Boolean, required:true }, 
    desktop:        { type:Boolean, required:true },
    id_house:       { type:String, required:true }
})

module.exports = mongoose.model('Room', UserSchema);