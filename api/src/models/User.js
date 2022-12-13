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

   
const cartSchema = new Schema({
    productId:{
      type: String,
      required: true
    },
    quantity:{
      type: Number,
      required: true,
      default: 1
    }
  });

const userSchema = new Schema({
    _id:{type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    mail:{
        type: String,
        required: true,
        trim: true
    },
    purchases:{
          type:[]
      },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    reviews:[reviewsSchema],
    location:{
        type: locationSchema,
    },
    cart:[cartSchema],
    admin:{
        type: Boolean,
        default: false
    },
    image:{
        type: String
    },
    imageId:{
        type: String
    },
    status: {
        type: Boolean,
        default: true
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