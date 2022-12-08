import {createContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../AsyncStorage/AsyncStorage';
import {
  setReducerCart,
  getUser,
  clearUser,
  // getDBCart,
  // createDBCart,
  // updateDBCart,
  // deleteDBCart,
} from '../../redux/actions';
import {useAuth0} from 'react-native-auth0';

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const {authorize, clearSession, user} = useAuth0();
  const [loadindAuth0, setLoadindAuth0] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const myUserDB = useSelector(state => state.user);
  const [updateUser, setUpdateUser] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [userId, setUserId] = useState(0);

  const [isSaveDB, setSaveDB] = useState(null);

  useEffect(() => {
    async function ejet() {
      if (!cartItems) {
        storage
          .getJSON('products')
          .then(async products => {
            setCartItems(products?.length ? [...products] : []);
          })
          .catch(error => {
            return setCartItems([]);
          });
      } else {
        storage.setJSON('products', cartItems);
      }
    }
    ejet();
  }, [cartItems]);

  useEffect(() => {
    async function ejet() {
      if (user) {
        setUserId(user.sub);
      } else {
        setUserId(0);
        setCartItems([]);
        await dispatch(setReducerCart([]));
        await dispatch(clearUser());
        setSaveDB(false);
      }
      alert('userAuth0 ' + user);
    }
    ejet();
  }, [user]);
  useEffect(() => {
    if (userId) {
      //"obtener la info del logueado ----> DB"
      async function ejet() {
        const response = await dispatch(getUser(userId));
        if (response) {
        } else {
          SignOff();
        }
      }
      ejet();
    }
  }, [updateUser]);
  useEffect(() => {
    async function ejet() {
      if (isSaveDB === null) {
        // storage.removeItem('isSaveDB');
        if (userId) {
          storage
            .get('isSaveDB')
            .then(response => {
              setSaveDB(response ? true : false);
            })
            .catch(error => {
              setSaveDB(false);
            });
        } else {
          console.log(isSaveDB, userId);
          storage.set('isSaveDB', isSaveDB);
          alert('shoppingCart ' + userId + ' isSaveDB ' + isSaveDB);
          //"obtener la info del logueado ----> DB"
          const response = await dispatch(getUser(userId));
          console.log('myUserDB', response);
          if (response) {
            alert('shoppingCart response' + response);
            if (!isSaveDB) {
              setSaveDB(true);
              //crear en db el carrito 1 sola vez
              //"guardado el carrito ----> DB"
              if (userId) {
                // Toast.fire({
                //   icon: 'success',
                //   title: 'saving...',
                // });
              }
              // Swal.showLoading();
              // await dispatch(createDBCart(cartItems, userId, true));
              //"obteniendo carrito ----> DB"
              if (userId) {
                // Toast.fire({
                //   icon: 'success',
                //   title: 'geting cart...',
                // });
              }
              // Swal.showLoading();
              // await dispatch(getDBCart(userId));
              if (userId) {
                // Toast.fire({
                //   icon: 'success',
                //   title: 'successfully',
                // });
              }
            }
          } else {
            SignOff();
          }
        }
      }
    }
    ejet();
  }, [userId]);

  useEffect(() => {
    // if (userId) {
    //   setCartItems([...cart]);
    //   //"finalCartDB"
    // }
  }, [cart]);
  //-----------------> Login
  const logIn = () => {
    setSaveDB(false);
  };
  const SignOff = async () => {
    await clearSession();
    setUserId(0);
    setCartItems([]);
    await dispatch(setReducerCart([]));
    await dispatch(clearUser());
    setSaveDB(false);
  };
  //<--------------

  const resetCart = () => {
    setCartItems([]);
  };

  const updateItemToCart = async (productInCart, quantity) => {
    const inCart = cartItems.find(
      proInCart => proInCart.productId === productInCart.productId,
    );
    if (
      inCart && quantity
        ? quantity <= inCart.product.stock
        : inCart.quantity + 1 <= inCart.product.stock
    ) {
      inCart.quantity = quantity ? quantity : inCart.quantity + 1;
      setCartItems([...cartItems]);
      // dispatch(setReducerCart(cartItems));
      // if (userId) {
      //   dispatch(updateDBCart(productInCart));
      // }
      return;
    }
  };
  const addItemToCart = async (detailProduct, quantity) => {
    if (quantity ? quantity : 1 <= detailProduct.stock) {
      const porductInCart = {
        quantity: quantity ? quantity : 1,
        productId: detailProduct._id,
        product: {
          _id: detailProduct._id,
          title: detailProduct.title,
          image: detailProduct.image,
          price: detailProduct.price,
          stock: detailProduct.stock,
        },
      };
      cartItems.push(porductInCart);
      setCartItems([...cartItems]);
      // if (userId) {
      //   Toast.fire({
      //     icon: 'success',
      //     title: 'loading...',
      //   });
      //   Swal.showLoading();
      //   dispatch(createDBCart(porductInCart, userId, true));
      //   //"obteniendo carrito ----> DB"
      //   dispatch(getDBCart(userId));
      // } else dispatch(setReducerCart(cartItems));

      return;
    }
    // Swal.fire({
    //   icon: 'warning',
    //   title: 'Oops...',
    //   text: 'Not in stock',
    // });
  };

  const subtractItemToCart = productInCart => {
    const inCart = cartItems.find(
      proInCart => proInCart.productId === productInCart.productId,
    );
    if (inCart) {
      if (inCart.quantity > 1) {
        inCart.quantity--;
        setCartItems([...cartItems]);

        // dispatch(setReducerCart(cartItems));
        // if (userId) {
        //   dispatch(updateDBCart(inCart));
        // }
      } else {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'You can buy from 1',
        // });
      }
    }
  };
  const deleteItemToCart = async productInCart => {
    const inCart = cartItems.find(
      proInCart => proInCart.productId === productInCart.productId,
    );
    if (inCart) {
      cartItems.splice(cartItems.indexOf(inCart), 1);
      setCartItems([...cartItems]);

      await dispatch(setReducerCart(cartItems));
      // if (userId) {
      //   dispatch(deleteDBCart(inCart.id));
      // }

      // Toast.fire({
      //   icon: 'error',
      //   title: `Product ${inCart.product.name} delete from cart`,
      // });
    }
    return 'finished';
  };

  return (
    <CartContext.Provider
      value={{
        userId,
        myUserDB,
        setUpdateUser,
        updateUser,
        logIn,
        SignOff,
        cartItems,
        resetCart,
        updateItemToCart,
        addItemToCart,
        subtractItemToCart,
        deleteItemToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
