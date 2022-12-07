import { GET_ADMIN } from "../action/const";

const initialState = {
    admin: {}
}

export default function reducer(state = initialState, {type, payload}) {

    switch (type) {
        case GET_ADMIN:
            return {
                ...state,
                admin: payload
            }
    
        default:
            return state;
    }
}