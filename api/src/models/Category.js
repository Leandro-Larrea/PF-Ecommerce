const {Schema, model, default: mongoose} = require("mongoose");

const categorySchema = new Schema({
    category:{
        type: String,
        required: true,
        unique: true
    },
});

const Category = model("Category", categorySchema);
module.exports = Category;