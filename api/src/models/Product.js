const { Schema, model, default: mongoose } = require("mongoose");

/* trim is gonna clean up the spaces at the end and begining of the string "   asd  ".trim() = "asd"*/

const reviewsSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  user: {
    type: String,
  },
  review: {
    type: String,
    trim: true,
  },
});

const ratingSchema = new Schema({
  rating: {
    type: Number,
    default: function(){
      let total = 0
      if(this.votedFor.length){
        for(p of this.votedFor){
        total += p.rating 
      }}
      return total
    }
},
  votedFor:{
    type: Array}
});

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },

    off: {
      type: Number,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
    },
    rating: {
        type: ratingSchema,
    },
    image:{
        type: String,
        required: true,
        trim: true
    },
    available:{
      type: Boolean,
      default: true
    },
    imageId:{
        type: String,
        trim: true,
        required: true
    },
    details: {
      type: Array,
    },
    sales:{
      type: Number,
      default: 0
    },
    reviews: [reviewsSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = model("Product", productSchema);
const ProductBackUp = model("ProductBackUp", productSchema);
module.exports = {
  Product,
  ProductBackUp
};
