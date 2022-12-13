const { Compra } = require("../models/Compra")
const { Product } = require("../models/Product")
const { User } = require("../models/User")

const stock = async (cart)=>{
    for(const e of cart){
        await Product.findByIdAndUpdate(e.productId,{$inc: {stock: -e.quantity}})
    }
}

const savePayment = async(payment) =>{
    const {cartItems, userId} = payment
    if(!cartItems || !userId) throw ("insuficent data")

    let a = await Compra({userId, products:cartItems})
    console.log(a)
    let b = await a.save()
    let updateUser = await User.findByIdAndUpdate(userId,{
        $push:{
            purchases: b
        }
    })
    await stock(cartItems)
    console.log(updateUser)
    let newUser = await User.findById(userId) 
    return newUser
}



const findPayments = async(id) =>{
    if(id){
        let payment = await Compra.findById(id)
        return payment 
    }
    const payments = await Compra.find()
    return payments
}

const findByUser = async(id) =>{
    if(id){
        let payment = await Compra.find({userId:id})
        return payment 
    }
        const payments = await Compra.find()
        return payments
}

module.exports ={
    findPayments,
    findByUser,
    savePayment
}

