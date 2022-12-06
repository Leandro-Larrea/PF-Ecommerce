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
       trim: true
     },
     review: {
       type: String,
       trim: true
     },
   });

const userSchema = new Schema({
    _id:{type: String,
        required: true,
        trim: true},
    name:{
        type: String,
        required: true,
        trim: true
    },
<<<<<<< Updated upstream
=======
    lastName:{
        type: String,
        required: true,
        trim: true
    },
>>>>>>> Stashed changes
    mail:{
        type: String,
        required: true,
        trim: true
    },
<<<<<<< Updated upstream
    reviews:{
        type:[reviewsSchema]
    },
=======
    purchases:{
          type:[reviewsSchema]
      },
>>>>>>> Stashed changes
    phone:{
        type: String,
        required: true,
        trim: true
    },
    reviews:[reviewsSchema],
    location:{
        type: locationSchema,
    },
    cart:{
        type: Array,
        required: false
    },
    admin:{
        type: Boolean,
        default: false
    },
    image:{
        type: String
    },
    imageId:{
        type: String
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