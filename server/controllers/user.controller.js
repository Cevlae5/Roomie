const User = require('../models/user');
const userCtrl = {};

userCtrl.getAll = async (req,res) => {
    const users = await User.find();
    if(users != null)
    {
         res.json({ result: "1", users });
    }
    else
    {
        res.json({ result: "0", msg: "users not found" });
    }  
}

userCtrl.getAllExceptMe = async (req,res) => {
    const users = await User.find({ user: { $ne: req.params.user }});
    if(users != null)
    {
         res.json({ result: "1", users });
    }
    else
    {
        res.json({ result: "0", msg: "users not found" });
    }
}

userCtrl.getAdmins = async (req,res) => {
    const users = await User.find({ $and: [ { os: { $ne: "" } }, { os: { $exists: true } }, { permission: "9" } ] });
    if(users != null)
    {
         res.json({ result: "1", users });
    }
    else
    {
        res.json({ result: "0", msg: "users not found" });
    }  
}

userCtrl.get = async (req,res) => {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findById(req.params.id);
        if(user != null)
        {
             res.json({ result: "1",user });
        }
        else
        {
             res.json({ result: "0", msg: "user not found" });
        }  
    }
    else
    {
        res.json({ result: "0", msg: "id not valid" });
    }
}

userCtrl.getByUsername = async (req,res) => {
    const user = await User.findOne({ user: req.params.user })
    if(user != null)
    {
        res.json({ result: "1", user});
    }
    else
    {
        res.json({ result: "0", msg: "user not found" });
    }
}

userCtrl.getByEmail = async (req,res) => {
    const user = await User.findOne({ email: req.params.email })
    if(user != null)
    {
        res.json({ result: "1", user});
    }
    else
    {
        res.json({ result: "0", msg: "user not found" });
    }
}

userCtrl.getPassword = async (req,res) => {
    const user = await User.findOne({ email: req.params.email, birth: req.params.birth })
    if(user != null)
    {
        res.json({ result: "1", user});
    }
    else
    {
        res.json({ result: "0", msg: "user not found" });
    }
}

userCtrl.create = async (req,res) => {
    const user = new User(req.body);
    console.log(user);
    const verify_user = await User.findOne({ user: user.user })
    const verify_email = await User.findOne({ email: user.email })
    if(verify_user == null && verify_email == null)
    {
        await user.save(function(err,resultado){
          if(err) {
            response = { result: "0", msg: "Error adding data" };
          } else {
            response = { result: "1", msg: "Registered", _id: resultado._id };
          }
        res.json(response);
        })      
    }
    else
    {
        res.json({ result: "2", msg: "user exists" })
    }
}

userCtrl.getAllExceptArray = async (req,res) => {
    const users = await User.find({ _id:  req.body });
    if(users != null)
    {
         res.json({ result: "1", users });
    }
    else
    {
        res.json({ result: "0", msg: "users not found" });
    }
}

userCtrl.update = async (req,res) => {
    const selectedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body},{ new:true })
    .then(
        res.json({ result: "1", msg: "ok" })
    )
    .catch(       
        res.json({ result: "0", msg: "error" })
    );
}

userCtrl.updatePermission = async (req,res) => {  
    const selectedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(
        res.json({ result: "1", msg: "ok" })
    )
    .catch(       
        res.json({ result: "0", msg: "error" })
    );
}

userCtrl.delete = async (req,res) => {
    const selectedUser = await User.findByIdAndDelete(req.params.id)
    .then(
        res.json({ result: "1",  msg: "ok" })
    )
    .catch(       
        res.json({ result: "0", msg: "error" })
    );
}

userCtrl.getByGender = async (req,res) => {
    if(req.params.gender_lookfor == 'c')
    {
        const user = await User.find({ $and: [ { gender_lookfor: req.params.gender }, { user: { $ne: req.params.user } }  ] }); 
        if(user != null)
        {
            res.json({ result: "1", user});
        }
        else
        {
            res.json({ result: "0", msg: "user not found" });
        }
    }
    else
    {
        const user = await User.find({ $and: [ { gender: req.params.gender_lookfor }, {gender_lookfor: req.params.gender }, { user: { $ne: req.params.user } } ] } );  
        if(user != null)
        {
            res.json({ result: "1", user});
        }
        else
        {
            res.json({ result: "0", msg: "user not found" });
        }
    }        
}



module.exports = userCtrl; 