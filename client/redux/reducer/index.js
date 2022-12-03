import {
  SET_REDUCER_CART,
  GET_PRODUCTS,
  SEARCH,
  GET_CATEGORIES,
  FILTER_CATEGORIES,
  SORT_BY_PRICE,
  SET_FILTER,
  SET_PRICE,
} from '../actions';

const initialState = {
  products: undefined,
  categories: [],
  cart: [],
  filters: {
    title: '',
    min: '',
    max: '',
    category: '',
  },
  total: 0
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRICE:
      return {
        ...state,
        total: payload
      }
    case SET_REDUCER_CART:
      return {
        ...state,
        cart: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        default: payload,
      };
    case SEARCH:
      return {
        ...state,
        products: payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filters: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case FILTER_CATEGORIES:
      return {
        ...state,
        products: payload,
      };
    //ordenandu por precio amigo
    case SORT_BY_PRICE:
      let productsData = [...state.products];
      let sort = [];

      if (payload === 'min-max') {
        sort = productsData.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        return {...state, products: sort};
      } else {
        sort = productsData
          .sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          })
          .reverse();

        return {...state, products: sort};
      }
    default:
      return state;
  }
};
export default reducer;
