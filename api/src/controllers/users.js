 const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { User } = require("../models/User")

 const postUser = async (obj) =>{    
     const {_id, name, lastName, mail , phone, location} = obj
     let d = await User.findById(_id)
     console.log("aca estamos en controller",d)
     if(d){
        throw ("u have already setted your profile")
     }
     const {country, city, address} = location;
     console.log(obj)

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
        address: /^[A-ZA-Z]{1}[a-zA-Z.':,\s_-]{3,92}$/,
      }
      
      let box = {...obj.location, ...obj};
      console.log("desde controller user",box)
      
    for(const e of Object.keys(box).filter( e => e !== "location" && e !== "admin" && e !== "_id" && e !=="image")){
        if(!validation[e].test(box[e])){
           throw `the field ${e} it's wrong`
        }
    }

   
     let {imageId, image} = await uploadToCloudinary(obj.image)
     obj.image = image
     obj.imageId = imageId 

    console.log(obj)
    let a = await User(obj)
    console.log(a)
    let b = await a.save()
     return b
 }

 const getUser = async (id) => {
    let admin
    if(id){
        console.log('id: ',id)
        admin = await User.findById(id)
    }
    else{
        admin = await User.find()
    }
    console.log('admin: ', admin)
    return admin
 }

 module.exports = {
    postUser, getUser
 };