import { CLEAN_UP, DELETE_PRODUCT, GET_ADMIN, GET_ADMINS, GET_BACKUP, GET_CATEGORIES, GET_SELLS, GET_PRODUCTS, GET_REVIEWS, GET_USER, GET_USERS, GET_USER_PAYMENTS, PRODUCT_DETAIL, SELL_DETAILS, RESTORE_PRODUCT, UPDATE_PRODUCT, GET_SELL } from "../action/const";


const initialState = {
    admin: null,
    admins: [],
    products: [],
    productsBackup: [],
    productDetail: null,
    users: [],
    categories: [],
    userReviews: [],
    sells: [],
    sellDetails: null,
    userPayments: [],
    user_pass:{user: 'Admin',
                pass: '123456'}

}

export default function reducer(state = initialState, {type, payload}) {

    switch (type) {
        case GET_ADMIN:
            return {
                ...state,
                admin: payload
            }
        
        case GET_ADMINS:
            return {
                ...state,
                admins: payload
            }

        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case SELL_DETAILS:
            return{
                ...state,
                sellDetails: payload
            }
            case GET_SELLS:
            return {
                ...state,
                sells: payload
            }
        
        case GET_SELL:
            return {
                ...state,
                sell: payload
            }

        case PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: payload
            }

        case CLEAN_UP:
            console.log("cleaning?", state)
            return {
                ...state,
                [payload]: null
            }
            
            case UPDATE_PRODUCT:
                let a = state.products.filter(e=> e._id !== payload._id)
                return {
                    ...state,
                    products: [...a, payload]
                }
        case GET_USERS:
            payload = payload.map(r => {
                return{
                    id: r._id,
                    name: `${r.name} ${r.lastName}`,
                    email: r.mail,
                    phone: r.phone,
                    //img: r.image,
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

        case GET_BACKUP:
            return {
                ...state,
                productsBackup: payload
            }

        case RESTORE_PRODUCT:
            return {
                ...state,
                productsBackup: state.productsBackup.filter(r => r._id !== payload._id),
                products: [...state.products, payload]
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

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(r => r._id !== payload)
            }
    
        default:
            return state;
    }
}