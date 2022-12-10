 const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { Product } = require("../models/Product")
const { User } = require("../models/User")

 const postUser = async (obj) =>{    
     const {_id, name, lastName, mail , phone, location, image} = obj
     let d = await User.findById(_id)
     console.log("aca estamos en controller",d)
     if(d){
        throw ("u have already setted your profile")
     }
     const {country, city, address} = location;
    // console.log(obj)

     if(!name || !lastName || !mail || !phone || !location || !country || !city || !address){
        throw("insufficient data")
     }
     const validation ={
        name: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,40}$/,
        lastName: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,40}$/,
        // description: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,702}$/,
        mail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        country: /^[A-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        city: /^[A-ZA-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        address: /^[A-ZA-Z]{1}[a-zA-Z.\d':,\s_-]{3,92}$/,
      }
      
      let box = {...obj.location, ...obj};
      console.log("desde controller user",box)
      
    for(const e of Object.keys(box).filter( e => e !== "location" && e !== "admin" && e !== "_id" && e !=="image")){
        if(!validation[e].test(box[e])){
           throw `the field ${e} it's wrong`
        }
    }

    if(image){
      let {imageId, image} = await uploadToCloudinary(obj.image)
      obj.image = image
      obj.imageId = imageId 
   }

    console.log(obj)
    let a = await User(obj)
    console.log(a)
    let b = await a.save()
     return b
 }

 const getUser = async (id) => {
   console.log(id)  
    if(id){  
       let user = await User.findById(id)
       console.log(user)
       return user
    }
     else{
       let user = await User.find({adimin:false})
       return user
     }
 }

 const updateCart = async(id, cart) =>{
   console.log("esto es cartcontroller", cart)
   let r = await User.findByIdAndUpdate(id,{cart:cart})
   let a = await User.findById(id)
   return a
 }

 const getCart = async(id) =>{
   
   let r = await User.findById(id,{cart:1, _id:0})
   console.log("desde get cart",r)
   let box = [];
   for(const e of r.cart){
      let a = await Product.findById(e.productId)
       let obj = {
          productId: e.productId,
          product: a,
          quantity: e.quantity
       }
       box.push(obj)   
   }
   return box
   // let result = r.cart.map(async (e) =>{
   //    let a = await Product.findById(e.productId)
   //    let obj = {
   //       productId: e.productId,
   //       product: a,
   //       quantity: e.quantity
   // }  
   // } )
   // return result
 }

 module.exports = {
   postUser,
   getUser,
   getCart,
   updateCart
 };