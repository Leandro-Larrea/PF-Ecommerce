import axios from 'axios'
import { GET_CATEGORIES, GET_PRODUCTS, GET_REVIEWS, GET_USER, GET_USERS, GET_USER_PAYMENTS } from './const'

export function postAdmin(admin){
    return async function (){
        console.log('actions')
        //let res = await axios.post(`http://localhost:3001/users`, admin)
        //console.log(res)
    }
}

export function getProduct(id = ''){
    return async function(dispatch){
        let res = await axios.get(`/search?title=${id}&category=&min=&max=`)
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }) 
    }
}

export function getUsers(id = ''){
    console.log('actions id: ', id)
    return async function (dispatch){
        let res = await axios.get(`/users?id=${id}`)
        if(id)
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        else
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
    }
}

export function getCategories() {
    return async function(dispatch){
        let res = await axios.get(`/categories`)
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        })
    }
}

export function postProduct(product){
    return async function(){
        let res = await axios.post(`/products`, product)
        return res.data
    }
}

export function getUserReviews(id){
        return async function(dispatch){
            let res = await axios.get(`/users/reviews?id=${id}`)
            dispatch({
                type: GET_REVIEWS,
                payload: res.data
            })
        }
}

export function getUserPayments(id){
    console.log('actions payments: ')
 /*    return async function(dispatch){
        let res = await axios.get(`/purchases/userPayment?id=${id}`)
        dispatch({
            type: GET_USER_PAYMENTS,
            payload: res.data
        })
    } */
}
    


    
