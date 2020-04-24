const Msg = require('../models/msg');
const MsgCtrl = {};

MsgCtrl.get = async (req,res) => {
    const message = await Msg.find({ "_id": req.params.id });
    if(message != null)
    {
         res.json({ result: "1", message });
    }
    else
    {
        res.json({ result: "0", msg: "Message not found" });
    }
}

MsgCtrl.getAll = async (req,res) => {
    const msgs = await Msg.find({ "visible":true }).sort( { created_fecha: -1, created_hora: -1 } );
    if(msgs != null)
    {
         res.json({ result: "1", msgs });
    }
    else
    {
        res.json({ result: "0", msg: "Messages not found" });
    }  
}

MsgCtrl.getAllArchivados = async (req,res) => {
    const msgs = await Msg.find({ "visible":false }).sort( { created_fecha: -1, created_hora: -1 } );
    if(msgs != null)
    {
         res.json({ result: "1", msgs });
    }
    else
    {
        res.json({ result: "0", msg: "Messages not found" });
    }  
}

MsgCtrl.getUserMsg = async (req,res) => {
    const msgs = await Msg.find({ "user": req.params.user }).sort( { created_fecha: -1, created_hora: -1 } );
    if(msgs != null)
    {
         res.json({ result: "1", msgs });
    }
    else
    {
        res.json({ result: "0", msg: "Messages not found" });
    }  
}

MsgCtrl.create = async (req,res) => {
    const msg = new Msg(req.body);
    await msg.save(function(err, resultado){
      if(err) {
        response = { result: "0", msg: "Error adding data" };
      } else {
        response = { result: "1", msg: "Msg ok", _id: resultado._id };
      }
      res.json(response);
    });
}


MsgCtrl.update = async (req,res) => {   
    const selectedMsg = await Msg.findByIdAndUpdate(req.params.id, { $set: req.body})
    .then(
        res.json({ result: "1", msg: "ok" })
    )
    .catch(       
        res.json({ result: "0", msg: "error" })
    );
}

// MsgCtrl.delete = async (req,res) => {
//     var query = { user: req.params.user, pub:req.params.pub }
//     const selectFollow = await Follow.deleteMany(query)
//     .then(
//         res.json({ result: "1",  msg: "ok" })        
//     )
//     .catch(
//         res.json({ result: "0", msg: "error" })
//     );
// }

module.exports = MsgCtrl; 