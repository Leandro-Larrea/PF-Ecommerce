import { GET_ADMIN, GET_CATEGORIES, GET_PRODUCTS, GET_REVIEWS, GET_USER, GET_USERS, GET_USER_PAYMENTS } from "../action/const";

const initialState = {
    admin: {},
    products: [],
    users: [],
    categories: [],
    userReviews: [],
    userPayments: []
}

export default function reducer(state = initialState, {type, payload}) {

    switch (type) {
        case GET_ADMIN:
            return {
                ...state,
                admin: payload
            }

        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
            
        case GET_USERS:
            payload = payload.map(r => {
                return{
                    id: r._id,
                    name: `${r.name} ${r.lastName}`,
                    email: r.mail,
                    phone: r.phone,
                    img: r.image,
                    status: r.status? 'active' : 'passive', 
                    location: r.location,
                    purchases: r.purchases,
                    reviews: r.reviews,
                    createdAt: r.createdAt 
                    }
                })
            return {
                ...state,
                users: payload
            }
        
        case GET_USER:
            payload = {
                id: payload._id,
                    name: `${payload.name} ${payload.lastName}`,
                    email: payload.mail,
                    phone: payload.phone,
                    img: payload.image,
                    status: payload.status? 'active' : 'passive', 
                    location: payload.location,
                    purchases: payload.purchases,
                    reviews: payload.reviews,
                    createdAt: payload.createdAt     
            }
            return{
                ...state,
                user: payload
            }

        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }

        case GET_REVIEWS:
            return{
                ...state,
                userReviews: payload
            }

        case GET_USER_PAYMENTS:
            return{
                ...state,
                userPayments: payload
            }
    
        default:
            return state;
    }
}