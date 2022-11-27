 const { User } = require("../models/User")

 const postUser = async (obj) =>{    
     const { name, description, mail, reviews, phone, location, admin } = obj
     const {country, city, address} = location;
     if(!name || !description || !mail || !phone || !location || !country || ! city || ! address || !admin){
        throw("insufficient data")
     }

    

    const validation ={
        name: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,40}$/,
        description: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,702}$/,
        mail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        country: /^[A-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        city: /^[A-ZA-Z]{1}[a-zA-Z.:,'\s_-]{3,62}$/,
        address: /^[A-ZA-Z]{1}[a-zA-Z.':,\s_-]{3,92}$/,
    }

    let box = {...obj.location, ...obj};
   
    for(const e of Object.keys(box).filter( e => e !== "location" && e !== "admin")){
        if(!validation[e].test(box[e])){
           throw `the field ${e} it's wrong`
        }
    }

     return "it works"
 }
