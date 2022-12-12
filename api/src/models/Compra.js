const {Schema, model, default: mongoose} = require("mongoose");

const productSchema = new Schema({
    
        productId: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        },
        price:{
            type: Number,
            require: true
        },
        subtotal:{
            type: Number,
            default: () => this.quantity * this.price,
            require: true
        }

    
})

const compraSchema = new Schema({
    product: [productSchema],
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
        type: String,
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