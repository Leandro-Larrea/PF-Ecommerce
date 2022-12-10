const {Schema, model, default: mongoose} = require("mongoose");

const productSchema = new Schema({
    productId:{
      type: String,
      required: true
    },
    quantify:{
      type: Number,
      required: true,
      default: 1
    },
    price:{type: Number,
        required: true,
    }
  });

const compraSchema = new Schema({
    products:[productSchema],
    totalPrice: {
        type: Number,
        require: true
    },
    userID: {
        type: Object,
        require: true
    }
});

module.exports = compraSchema;