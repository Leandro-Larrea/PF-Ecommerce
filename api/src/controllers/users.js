 const { User } = require("../models/User")

 const postUser = async (obj) =>{    
<<<<<<< Updated upstream
     const { name, mail, reviews, phone, location, admin} = obj
=======
     const {_id, name, lastName, email , phone, location} = obj
     if(User.findById(_id)){
        throw ("u have already setted your profile")
     }
>>>>>>> Stashed changes
     const {country, city, address} = location;
     console.log(obj)

<<<<<<< Updated upstream
     if(!name || !mail || !phone || !country || !city || !address ||
         typeof(admin) !== "boolean"){
=======
     if(!name || !lastname || !email || !phone || !location || !country || !city || !address){
>>>>>>> Stashed changes
        throw("insufficient data")
     }

    const validation ={
        name: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,40}$/,
        lastName: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,40}$/,
        // description: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,702}$/,
        email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        country: /^[A-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        city: /^[A-ZA-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        address: /^[A-ZA-Z]{1}[a-zA-Z.':,\s_-]{3,92}$/,
    }

    let box = {...obj.location, ...obj};
   
    for(const e of Object.keys(box).filter( e => e !== "location" && e !== "admin" && e !== "_id")){
        if(!validation[e].test(box[e])){
           throw `the field ${e} it's wrong`
        }
    }
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