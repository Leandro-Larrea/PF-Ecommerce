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
    required: true
  },
  votes: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: function () {
      if (this.points > 0 || this.votes > 0) return this.points / this.votes;
      return 0;
    },
  },
});

const cartSchema = new Schema({
  productId:{
    type: String,
    required: true
  },
  quantify:{
    type: Number,
    required: true,
    default: 1
  }
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
    },
    rating: {
        type: ratingSchema,
        required: true
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
    cart:[cartSchema],
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
