import { GET_ADMIN, GET_IDLOGIN, GET_USERS, POST_ADMIN } from "../action/const";

const initialState = {
    admin: {},
    idLogin: '',
    users: [],
    previusLogin: {
                    user: 'Admin',
                    pass: '123456'
                    },
    adminDb: {}
}

export default function reducer(state = initialState, {type, payload}) {

    switch (type) {
        case GET_ADMIN:
            return {
                ...state,
                adminDb: payload
            }
        
            case POST_ADMIN:
                if(payload.admin)
                    return {
                        ...state,
                       admin: payload
                    }
                else
                    return 'error'
            
            case GET_IDLOGIN:
                if(state.admin._id === payload)
                    return{
                        ...state,
                        idLogin: payload
                    }
                else
                    return 'Usuario no registrado como administrador'

            case GET_USERS:
                return {
                    ...state,
                    users: payload
                }

        default:
            return state;
    }
}