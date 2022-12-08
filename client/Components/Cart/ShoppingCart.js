import {createContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../AsyncStorage/AsyncStorage';
import {
  setReducerCart,
  getUser,
  clearUser,
  dbUpdateCart,
  getDBCart,
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
      if (userId) {
        if (isSaveDB === null) {
          // storage.removeItem('isSaveDB');
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
              //crear en db el carrito 1 sola vez
              //"guardado el carrito ----> DB"

              await dispatch(
                dbUpdateCart(
                  cartItems.map(i => {
                    i.quantity, i.productId;
                  }),
                  userId,
                  true,
                ),
              );
              //"obteniendo carrito ----> DB"
              await dispatch(getDBCart(userId));
              setSaveDB(true);
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
    if (userId) {
      setCartItems([...cart]);
      //"finalCartDB"
    }
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
    if (
      productInCart && quantity
        ? quantity <= productInCart.product.stock
        : productInCart.quantity + 1 <= productInCart.product.stock
    ) {
      productInCart.quantity = quantity ? quantity : productInCart.quantity + 1;
      setCartItems([...cartItems]);
      if (userId) {
        const response = await dispatch(
          dbUpdateCart(
            cartItems.map(i => {
              return i.quantity, i.productId;
            }),
            userId,
            true,
          ),
        );
        alert(
          'response adUpdateCart: keys:' +
            Object.keys(response) +
            ' values: ' +
            Object.values(response),
        );
      }
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

      if (userId) {
        await dispatch(
          dbUpdateCart(
            cartItems.map(i => {
              return i.quantity, i.productId;
            }),
            userId,
            true,
          ),
        );
      }
      return;
    }
  };

  const subtractItemToCart = async productInCart => {
    if (productInCart.quantity > 1) {
      productInCart.quantity--;
      setCartItems([...cartItems]);

      if (userId) {
        await dispatch(
          dbUpdateCart(
            cartItems.map(i => {
              return i.quantity, i.productId;
            }),
            userId,
            true,
          ),
        );
      }
      return;
    }
  };
  const deleteItemToCart = async productInCart => {
    cartItems.splice(cartItems.indexOf(productInCart), 1);
    setCartItems([...cartItems]);

    if (userId) {
      await dispatch(
        dbUpdateCart(
          cartItems.map(i => {
            return i.quantity, i.productId;
          }),
          userId,
          true,
        ),
      );
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
