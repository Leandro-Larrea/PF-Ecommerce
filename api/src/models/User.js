const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    mail:{
        type: String,
        reqyured: true,
        trim: true
    }
},
    {
    timestamps: true,
    versionKey: false
    },
)

 const User = model("User", userSchema);
 module.exports = User;