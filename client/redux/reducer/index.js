import * as actions from '../Actions'

const initialState = {
    products:[]
}

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case actions.GET_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
        case actions.SEARCH: 
            return {
                ...state,
                products: action.payload
            }    
        default:
            return state
    }
}
export default reducer