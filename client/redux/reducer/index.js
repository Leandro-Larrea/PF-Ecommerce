import {GET_PRODUCTS, SEARCH, GET_CATEGORIES} from '../actions';

const initialState = {
  products: undefined,
  categories: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SEARCH:
      return {
        ...state,
        products: payload,
      };
    case GET_CATEGORIES:
        return {
            ...state,
            categories:payload
        }  
    default:
      return state;
  }
};
export default reducer;
