const {Schema, model, default: mongoose} = require("mongoose");

/* trim is gonna clean up the spaces at the end and begining of the string "   asd  ".trim() = "asd"*/

const reviewsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    review:{
        type: String,
        required: true,
        trim: true
    }
}
)

const productSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true 
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        require: true,
        trim:true
    },
    rating:{
        type: Number,
    },
    reviews:[reviewsSchema]
},
    {
        timestamps: true,
        versionKey: false
    },
 
)





// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
//   "rate": 3.9,
//   "count": 120
// const Task = model("Task", taskSchema)
 const Product = model("Product", productSchema);
 module.exports = Product;