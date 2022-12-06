const Category = require("../models/Category.js");

const createCategory = async(obj) => {
    const categoryCreated = Category(obj)
    const categorySaved = await categoryCreated.save()
    return categorySaved
}

const findCategory = async() => {
    const categories = await Category.find()
    return categories
}

module.exports = {
    createCategory,
    findCategory
}