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

const ratingSchema = new Schema({
    points:{
        type: Number
    },
    votes:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: function() {
            return this.points / this.votes
        }
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
        required: true,
        trim:true
    },
    stock: {
        type: Number
    },
    rating: {
        type: ratingSchema,
        required: true
    },
    image:{
        type: String,
        required: true
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