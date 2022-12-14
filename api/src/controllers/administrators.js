const { Admin } = require('../models/Admin')

const getAdmins = async (id = '') => {
    let admins = []
    if(id){
        admins = await Admin.findById(id)
    }
    else {
        admins = await Admin.find()
    }
    return admins
}

const postAdmin = async (id, pass) => {
    console.log(id, pass)
    const obj = {
        _id: id,
        pass: pass
    }
    const objMongo = await Admin(obj)
    const result = await objMongo.save()
    return objMongo
}

const deleteAdmin = async (id) => {
    let result = await Admin.findByIdAndRemove(id)
    return result
}

module.exports = {
    getAdmins,
    postAdmin,
    deleteAdmin
}