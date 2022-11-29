const {Schema, model} = require("mongoose");

const locationSchema = new Schema({
    country:{
        type: String,
        required: true,
        trim: true,      
    },
    city:{
        type: String,
        required: true,
        trim: true,      
    },
    address:{
        type: String,
        required: true,
        trim: true,      
    },
});

 const reviewsSchema = new Schema({
     product: {
       type: String,
       required: true,
     },
     review: {
       type: String,
       required: true,
       trim: true,
     },
   });

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    mail:{
        type: String,
        required: true,
        trim: true
    },
    //  reviews:{
        //  type:[reviewsSchema]
    //  },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    location:{
        type: locationSchema,
        required: true
    },
    admin:{
        type: Boolean,
        required: true
    }
},
    {
    timestamps: true,
    versionKey: false
    },
)

 const User = model("User", userSchema);
 module.exports = {
    User
};