import axios from 'axios'


export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SEARCH = 'SEARCH';




export const getProducts =  () => dispatch =>{
   /*cada uno tiene que poner su propia IP*/ 
    return axios.get("http://192.168.0.94:3001/products")
    .then (res => {
        console.log(res.data)
        dispatch({
            type:"GET_PRODUCTS",
            payload:res.data
        })
    })
}

export const search = (name) => {
    return async function (dispatch) {
        return await axios(`http://192.168.0.94:3001/products?name=${name}`)
        .then(res => dispatch({
            type: SEARCH,
            payload: res.data
        }))
    }
} 