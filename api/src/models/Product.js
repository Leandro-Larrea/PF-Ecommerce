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






 const Product = model("Product", productSchema);
 module.exports = Product;