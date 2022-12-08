import axios from 'axios'
import { GET_ADMIN, GET_USERS, POST_ADMIN } from './const'

export function postAdmin(admin){
    return async function (dispatch){
        console.log('actions')
        let res = await axios.post(`/users`, admin)
        console.log(res)
        dispatch({
            type: POST_ADMIN,
            payload: res.data
        })
    }
}

export function getAdmin(){
    return async function (dispatch) {
        console.log('llega el admin1')
        let res = await axios.get(`/users/admin`)
        console.log('llega el admin', res.data)
        dispatch({
            type: GET_ADMIN,
            payload: res.data
        })
    }
}

export function getUsers(){
    return async function (dispatch){
        console.log('users: ')
        let res = await axios.get('/users')
        console.log(res)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
}