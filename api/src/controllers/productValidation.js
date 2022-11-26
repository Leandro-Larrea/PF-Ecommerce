
const productValidation = (obj) => {
    if(!obj.title || !obj.price || !obj.description || !obj.category || !obj.stock || !obj.image)
        return 'Faltan parametros'
    if(obj.title.match(/[a-zA-Z 0-9.,'¡!¿?$]+/gi)[0].length !== obj.title.length)
        return 'Titulo con simbolos no validos.'
    if(obj.title.price <=0)
        return 'El precio no puede ser negativo'
    if(obj.description.match(/[a-zA-Z 0-9.,'¡!¿?$]+/gi)[0].length !== obj.description.length)
        return 'Descripcion con simbolos no validos.'
    if(obj.stock < 0 || !Number.isInteger(obj.stock))
        return 'El stock no puede ser negativo o contener decimales'
    return 'OK'
}

module.exports = productValidation 