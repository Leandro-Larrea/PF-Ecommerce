const { Compra } = require("../models/Compra")


const savePayment = async(payment) =>{
    const {productId, quantity, price, products, userId} = req.body
    if(!productId || !quantity || !price || !products || !userId) throw ("insuficent data")

    let a = await Compra(payment)
    console.log(a)
    let b = await a.save()
     return b
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

