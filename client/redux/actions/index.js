import axios from 'axios';

export const SET_REDUCER_CART = 'SET_REDUCER_CART';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH = 'SEARCH';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PRICE = 'SET_PRICE';
export const GET_USER = 'GET_USER';

export const setReducerCart = cart => {
  return {
    type: SET_REDUCER_CART,
    payload: cart,
  };
};
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

export const sortByPrice = payload => {
  return {
    type: 'SORT_BY_PRICE',
    payload: payload,
  };
};

export const search = (title, min, max, category) => {
  return async function (dispatch) {
    return await axios(
      `/search?title=${title}&min=${min}&max=${max}&category=${category}`,
    ).then(res =>
      dispatch({
        type: SEARCH,
        payload: res.data,
      }),
    );
  };
};

export const setFilter = payload => {
  return {
    type: 'SET_FILTER',
    payload: payload,
  };
};

export function postUser(obj) {
  return async function (dispatch) {
    await axios
      .post(`/users`, obj)
      .then(a => {
        console.log(a.data);
        return;
      })
      .catch(error => {
        console.log('error', error);
        return;
      });
  };
}

export const getUser = id => dispatch => {
  return axios.get(`/users?id=${id}`).then(res => {
    dispatch({
      type: 'GET_USER',
      payload: res.data,
    });
  });
};

export const filterByCategories = category => dispatch => {
  return axios.get(`/search?category=${category}`).then(res => {
    dispatch({
      type: 'FILTER_CATEGORIES',
      payload: res.data,
    });
  });
};
