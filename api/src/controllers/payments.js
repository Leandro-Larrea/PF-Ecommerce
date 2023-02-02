const { Compra } = require("../models/Compra")
const { Product } = require("../models/Product")
const { User } = require("../models/User")

const stock = async (cart)=>{
    for(const e of cart){
        await Product.findByIdAndUpdate(e.productId,{$inc: {stock: -e.quantity, sales: e.quantity}})
    }
}

const dates = (date) =>{
    let a = date.split("")
    let b = a.slice(0,10)
    let c = a.slice(12,20)
    let d = b.join("") + " " + c.join("")
    return d
}

const savePayment = async(payment) =>{
    const {cartItems, userId} = payment
    if(!cartItems || !userId) throw ("insuficent data")

    let a = await Compra({userId, products:cartItems})
    let b = await a.save()
    let updateUser = await User.findByIdAndUpdate(userId,{
        $push:{
            purchases: b
        }
    })
    await stock(cartItems)
    let newUser = await User.findById(userId) 
    return newUser
}



const findPayments = async(id = '') =>{
    if(id){
        let payment = await Compra.findById(id)
         //payment.createdAt = dates(payment.createdAt)
        return payment 
    }
    const payments = await Compra.find()
   
//    let a = payments.map(e=> {
//         let obj = {
//             ...e,
//             createdAt: dates(e.createdAt)
//         }
//         return e
//     })
//     return a
return payments
}

const getPaymentDetails = async(id)=>{
    let payment = await Compra.findById(id)
    let items = []

    for(const e of payment.products){
        let p = await Product.findById(e.productId)
        
        let a = {
        quantity:e.quantity,
        subTotal: e.subtotal,
        price:e.price,
        image: p.image,
        title: p.title,
        }
        items.push(a)
    }

const user = await User.findById(payment.userId,{name: 1, lastName: 1, mail: 1})
payment.products = items
    let facturation = {
        user,
       totalPrice: payment.totalPrice,
       products: items
    }
    return facturation

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
    savePayment,
    getPaymentDetails
}

