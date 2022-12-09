import {createContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../AsyncStorage/AsyncStorage';
import {getUser, clearUser, dbUpdateCart, getDBCart} from '../../redux/actions';
import {useAuth0} from 'react-native-auth0';

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const {clearSession, user} = useAuth0();
  let [init, setInit] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const myUserDB = useSelector(state => state.user);
  const [updateUser, setUpdateUser] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [userId, setUserId] = useState(null);
  // user = undefined;
  let [isSaveDB, setSaveDB] = useState(null);

  useEffect(() => {
    async function ejet() {
      if (user) {
        setUserId(user.sub);
      } else {
        // setUserId('google-oauth2|107115370877971409336');
        if (init) {
          setUserId(
            null /*'google-oauth2|107115370877971409336'  'auth0|638bc7f0a442109d49bd4774' */,
          );
          setCartItems([]);
          await dispatch(clearUser());

          storage.set('isSaveDB', false);
          setSaveDB(false);
          setInit(false);
        }
      }
    }
    ejet();
  }, [user]);

  useEffect(() => {
    ejet();
    async function ejet() {
      if (!cartItems && !userId) {
        storage
          .getJSON('products')
          .then(async products => {
            const c = products?.length ? [...products] : [];
            setCartItems(c);
          })
          .catch(error => {
            return setCartItems([]);
          });
      } else {
        if (userId && init) {
          await dispatch(dbUpdateCart(cartItems, userId, true));
        }
        storage.setJSON('products', cartItems);
      }
    }
  }, [cartItems]);
  useEffect(() => {
    storage
      .get('isSaveDB')
      .then(response => {
        setSaveDB(response ? true : false);
        ejet(response ? true : false);
      })
      .catch(error => {
        setSaveDB(true);
        ejet(true);
      });
    async function ejet(isSave = true) {
      if (userId) {
        //"obtener la info del logueado ----> DB"
        const response = await dispatch(getUser(userId));
        if (response) {
          let cartDB = [];
          //"obteniendo carrito ----> DB"
          if (!init) {
            cartDB = await dispatch(getDBCart(userId));
            function changePosition(arr, p1, p2) {
              [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
            }
            [...cartItems].map((e, i) => {
              const find = cartDB.find(item => item.productId === e.productId);
              if (find) {
                cartDB.splice(cartDB.indexOf(find), 1);
                changePosition(cartItems, i, 0);
              }
            });
            cartDB = [...cartItems, ...cartDB];
          }
          if (!isSave) {
            //crear en db el carrito 1 sola vez
            //"guardado el carrito ----> DB"
            if (cartItems) {
              await dispatch(dbUpdateCart(cartDB, userId, true));

              storage.setJSON('products', cartDB);
            }

            storage.set('isSaveDB', true);
            // isSaveDB = true;
            setSaveDB(true);
          }
          if (!init) {
            init = true;
            setInit(true);
            setCartItems(cartDB);
          }
        } else {
          // SignOff();
        }
      }
    }
  }, [userId, isSaveDB]);

  // useEffect(() => {
  //   if (userId && !init) {
  //     //"finalCartDB"
  //   }
  // }, [cart]);
  //-----------------> Login
  const logIn = () => {
    setSaveDB(false);
  };
  const SignOff = async () => {
    await clearSession();
    setUserId(0);
    setCartItems([]);
    await dispatch(clearUser());
    setSaveDB(false);
    setInit(false);
  };
  //<--------------

  const resetCart = () => {
    setCartItems([]);
  };

  const updateItemToCart = async (productInCart, quantity) => {
    if (
      productInCart && quantity
        ? quantity <= productInCart.product.stock
        : productInCart.quantity + 1 <= productInCart.product.stock
    ) {
      productInCart.quantity = quantity ? quantity : productInCart.quantity + 1;
      setCartItems([...cartItems]);
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
      return;
    }
  };

  const subtractItemToCart = async productInCart => {
    if (productInCart.quantity > 1) {
      productInCart.quantity--;
      setCartItems([...cartItems]);
      return;
    }
  };
  const deleteItemToCart = async productInCart => {
    cartItems.splice(cartItems.indexOf(productInCart), 1);
    setCartItems([...cartItems]);
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
