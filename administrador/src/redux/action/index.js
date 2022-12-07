import axios from 'axios'

export function postAdmin(admin){
    return async function (dispatch){
        console.log('actions')
        let res = await axios.post(`http://localhost:3001/users`, admin)
        console.log(res)
    }
}