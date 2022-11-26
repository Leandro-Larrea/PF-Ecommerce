 const { User } = require("../models/User")

    
 const postUser = async (obj) =>{    
     const { name, description, mail, reviews, phone, location } = req.body
     if(!name || !description || !mail || !reviews || !phone || !location || !admin){
         throw("insufficient data")
     }
     const validation ={
         name: /^[A-Z]{1}[a-z\s_-]{3,32}$/,
         description: /^[A-Z]{1}[a-z\s_-]{3,702}$/,
        
     }
    
     const s = await a.save()
     return res.status(200).json(s)
 }

