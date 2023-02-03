import {
  GET_PRODUCT_BYPK,
  GET_PRODUCTS,
  SEARCH,
  GET_CATEGORIES,
  FILTER_CATEGORIES,
  SORT_BY_PRICE,
  SET_FILTER,
  SET_PRICE,
  GET_USER,
  GET_REVIEWS,
  SET_RATING,
  GET_PURCHASES,
  PUCHASE_DETAIL,
  CLEAN,
  NEW_USER
} from '../actions';

const initialState = {
  detailProduct: undefined,
  products: undefined,
  categories: [],
  filters: {
    title: '',
    min: '',
    max: '',
    category: '',
  },
  productReview: [],
  user: null,
  total: 0,
  detalle: [],
  userPurchases:[],
  purchaseDetail:{}
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRICE:
      return {
        ...state,
        total: payload.price,
        detalle: payload.detalle
      };

    case GET_PRODUCT_BYPK:
      return {
        ...state,
        detailProduct: payload.a,

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
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
      case NEW_USER:
        return {
          ...state,
          user: payload,
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

      if (payload === 'Lower-Higher') {
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
    case GET_REVIEWS:
      return {
        ...state,
        productReview: payload,
      };
    
    case SET_RATING:
      return{
        ...state,
        detailProduct:{
          ...state.detailProduct, 
          rating:payload
        }
      }
    case GET_PURCHASES:
      return {
       ...state,
       userPurchases:payload
    }
   case PUCHASE_DETAIL:
    return {
      ...state,
      purchaseDetail:payload
    }
    case CLEAN:
      return {
        ...state,

        productReview: [],
        detailProduct: undefined,
        purchaseDetail:{}
      }  
    default:
      return state;
  }
};
export default reducer;
