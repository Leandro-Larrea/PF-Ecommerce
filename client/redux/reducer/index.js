import {
  SET_REDUCER_CART,
  GET_PRODUCTS,
  SEARCH,
  GET_CATEGORIES,
  FILTER_CATEGORIES,
} from '../actions';

const initialState = {
  products: undefined,
  categories: [],
  cart: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_REDUCER_CART:
      return {
        ...state,
        cart: payload,
      };
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
        categories: payload,
      };
    case FILTER_CATEGORIES:
      console.log('reducer ejecutado');
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default reducer;
