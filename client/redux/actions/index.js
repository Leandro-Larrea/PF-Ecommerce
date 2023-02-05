import axios from 'axios';

export const GET_PRODUCT_BYPK = 'GET_PRODUCT_BYPK';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH = 'SEARCH';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PRICE = 'SET_PRICE';
export const SET_RATING = 'SET_RATING';
export const GET_USER = 'GET_USER';
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_PURCHASES = 'GET_PURCHASES'
export const PUCHASE_DETAIL = 'PUCHASE_DETAIL'
export const CLEAN = 'CLEAN'
export const NEW_USER = 'NEW_USER'

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
    .catch(() => []);
};
export const dbUpdateCart = (cart, userId) => dispatch => {
  cart = cart.map(e => {
    return { productId: e.productId, quantity: e.quantity };
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
export const getProductByPK = productId => dispatch => {
  return axios
    .get(`/products/${productId}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT_BYPK,
        payload: res.data,
      });
      console.log("Esto es el detail de la action",res.data)
      return true;
    })
    .catch(() => false);
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
        console.log("hola esto es el post",a.data);
        return dispatch({
          type: NEW_USER,
          payload: a.data,
        }) 
      })
      .catch(error => {
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
      console.log("hola esto es getUser", res.data)
      return res.data ? true : false;
    })
    .catch(() => false);
};
export const clearUser = () => dispatch => {
  dispatch({
    type: 'GET_USER',
    payload: null,
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

export function addReview(reviewData, id) {
  return async function (dispatch) {
    await axios
      .put('/products/reviews', reviewData)
      .then(res => {
        const productReviews = res.data.filter(e => e.productId == id)[0];
        dispatch({
          type: 'GET_REVIEWS',
          payload: productReviews,
        });
      })
      .catch(error => {
        console.log('error', error);
        return;
      });
  };
}

export function addRating(ratingData){
  return async function (dispatch) {
 
    await axios
      .put('/products/rating', ratingData)
      .then(res => {

       dispatch({
        type:'SET_RATING',
        payload:res.data.rating
       })
      })
      .catch(error => {
        console.log('error', error);
        return;
      });
  };
}

export const getReviews = id => dispatch => {
  return axios.get('/products/reviews').then(res => {
    const productReviews = res.data.filter(e => e.productId == id)[0];
    dispatch({
      type: 'GET_REVIEWS',
      payload: productReviews,
    });
  });
};

export const getPurchases = id => dispatch => {
  return axios.get(`/purchases/userPayment?id=${id}`)
  .then(res=>{
    dispatch({
      type:'GET_PURCHASES',
      payload:res.data
  })
  })
}
export const purchaseDetails = id => dispatch =>{
  return axios.get(`/purchases/${id}`)
  .then(res=>{
    dispatch({
      type:'PUCHASE_DETAIL',
      payload:res.data
    }
    )
  })
}

export const clean = (payload) => {
  return {
    type: CLEAN,
    payload
  }
}
