const mongoose = require("mongoose");
require("dotenv").config();
const {LINK_DB} = process.env


// mongoose.connect(connectionsString,{
//     useNewUrlParser: true,
//     useUnifieTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true})
// .then(()=> {
//     console.log("database connected")
// }).catch(err =>{
//     console.error(err)
// })

const db = async () =>{
    try {
        const db = await mongoose.connect(LINK_DB)
        console.log("db connected")
    }   catch (error){
        console.error(error);
    } 
};

module.exports = db