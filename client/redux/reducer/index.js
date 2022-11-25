import {GET_PRODUCTS, SEARCH} from '../actions';

const initialState = {
  products: undefined,
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
    default:
      return state;
  }
};
export default reducer;
