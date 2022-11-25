import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH = 'SEARCH';

export const getProducts = () => dispatch => {
  /*cada uno tiene que poner su propia IP*/
  return axios.get('/products').then(res => {
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    return true;
  });
};

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
