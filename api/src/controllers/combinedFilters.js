const {getProducts} = require('./getProducts')

const combinedFilters = async (obj) => {
    let results = await getProducts(obj.title)
    if(obj.category)
        results = results.filter(res => res.category === obj.category)
    if(obj.price.min) 
        results = results.filter(res => res.price >= obj.price.min)
    if(obj.price.max)
        results = results.filter(res => res.price <= obj.price.max)
      
    if(results.length === 0)
        return 'No existe'
    return results;
    
}

module.exports = combinedFilters;
