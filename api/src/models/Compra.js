const {Schema, model, default: mongoose} = require("mongoose");

const productSchema = new Schema({
    productId:{
      type: String,
      required: true
    },
    quantity:{
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
        default: function(){
          let total = 0
          for(p of this.products){
            total += p.price * p.quantity
          }
          return total
        }
    },
    userId: {
        type: Object,
        require: true
    }
});

const Compra = model("Compra", compraSchema);
module.exports = {
   Compra
};
module.exports = {
  Compra
};