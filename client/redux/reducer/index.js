import * as actions from '../actions'

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
        default:
            return state
    }
}
export default reducer