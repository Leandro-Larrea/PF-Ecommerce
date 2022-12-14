const { Schema, model, default: mongoose } = require('mongoose')

const adminSchema = new Schema({
    _id: {
        type: String, 
        trim: true
    },
    pass: {
        type: String,
        trim: true,
        required: true

    }
},
{
timestamps: true,
versionKey: false
},
)

const Admin = model("Admin", adminSchema );
module.exports = {
    Admin
}