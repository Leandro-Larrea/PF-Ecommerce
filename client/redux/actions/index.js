import axios from 'axios';
import { ActionSheetIOS } from 'react-native';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH = 'SEARCH';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PRICE = 'SET_PRICE';
export const GET_USER = 'GET_USER';
export const GET_REVIEWS='GET_REVIEWS'

export const getDBCart = userId => dispatch => {
  return axios
    .get(`/users/cart/${userId}`)
    .then(res => {
      const cart = res.data.map(e => {
        return {
          quantity: e.quantity,
          productId: e.productId,
          product: {
            _id: e.product._id,
            title: e.product.title,
            image: e.product.image,
            price: e.product.price,
            stock: e.product.stock,
          },
        };
      });
      return cart;
    })
    .catch(() => false);
};
export const dbUpdateCart = (cart, userId) => dispatch => {
  cart = cart.map(e => {
    return {productId: e.productId, quantity: e.quantity};
  });
  return axios
    .put(`/users/cart/${userId}`, cart)
    .then(response => {
      return true;
    })
    .catch(() => {
      return false;
    });
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
  return axios
    .get(`/users?id=${id}`)
    .then(res => {
      dispatch({
        type: 'GET_USER',
        payload: res.data,
      });
      return true;
    })
    .catch(() => false);
};
export const clearUser = () => dispatch => {
  dispatch({
    type: 'GET_USER',
    payload: [],
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


export function addReview(reviewData) {
  return async function (dispatch) {
    await axios
      .put('/products/reviews', reviewData)
      .then(a => {
        return;
      })
      .catch(error => {
        console.log('error', error);
        return;
      });
  };
}

export const getReviews = (id) => dispatch => {

  return axios.get('products/reviews')
  .then(res => {
    const productReviews = res.data.filter(e=>e.productId==id)
    dispatch({
      type: 'GET_REVIEWS',
      payload: productReviews,
    });
  });
};