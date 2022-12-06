const {Schema, model, default: mongoose} = require("mongoose");

const compraSchema = new Schema({
    producID: {
       type: String,
       require: true,
       unique: true
    },
    amount: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    userID: {
        type: Object,
        require: true
    }
});

module.exports = cartSchema;