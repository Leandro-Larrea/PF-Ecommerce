import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH = 'SEARCH';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';

export const getProducts = () => dispatch => {
  /*cada uno tiene que poner su propia IP*/
  return axios.get('/search').then(res => {
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    return true;
  });
};

export const getCategories = () => dispatch => {
  return axios
    .get('/categories')

    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    });
};

export const filterByCategories = (category)=>dispatch=>{
    return axios.get(`/search?category=${category}`)
    .then(res=>{
      dispatch({
        type:'FILTER_CATEGORIES',
        payload:res.data
      })
    })
} 

export const search = name => {
  return async function (dispatch) {
    return await axios(`/products?name=${name}`).then(res =>
      dispatch({
        type: SEARCH,
        payload: res.data,
      }),
    );
  };
};

export const postProduct = (payload) => {
  return async function (dispatch) {
    return await axios.post('/products', payload)
  }
}

