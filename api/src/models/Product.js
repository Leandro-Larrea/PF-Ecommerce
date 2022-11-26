const { Schema, model, default: mongoose } = require("mongoose");

/* trim is gonna clean up the spaces at the end and begining of the string "   asd  ".trim() = "asd"*/

const reviewsSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
    trim: true,
  },
});

const ratingSchema = new Schema({
  points: {
    type: Number,
  },
  votes: {
    type: Number
  },
  rating: {
    type: Number,
    default: function () {
      if (this.points > 0 || this.votes > 0) return this.points / this.votes;
      return 0;
    },
  },
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
      required: true
    },
    rating: {
        type: ratingSchema
    },
  
    image:{
        type: String,
        required: true,
        trim: true
    },
    imageId:{
        type: String,
        trim: true,
        required: true
    },
    details: {
      type: Array,
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
