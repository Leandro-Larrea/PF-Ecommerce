import {createContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setReducerCart} from '../../redux/actions';
import storage from '../AsyncStorage/AsyncStorage';
// import {
//   updateToCart,
//   getDBCart,
//   createDBCart,
//   updateDBCart,
//   deleteDBCart,
//   clearMyUser,
//   getUser,
// } from "../../redux/actions";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const myUser = useSelector(state => state.myUser);
  const [updateUser, setUpdateUser] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [userId, setUserId] = useState(0 /* verificar() */);

  const [isSaveDB, setSaveDB] = useState(() => {
    try {
      const SaveDBStorage = storage.get('isSaveDB');
      return SaveDBStorage ? SaveDBStorage : false;
    } catch (error) {
      return false;
    }
  });

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

  // useEffect(async () => {
  //   if (userId) {
  //     //"obtener la info del logueado ----> DB"
  //     const response = await dispatch(getUser(userId));
  //     if (response) {
  //     } else {
  //       SignOff();
  //     }
  //   }
  // }, [updateUser]);
  // useEffect(async () => {
  //   storage.set('isSaveDB', isSaveDB);
  //   if (userId) {
  //     //"obtener la info del logueado ----> DB"
  //     const response = await dispatch(getUser(userId));
  //     if (response) {
  //       if (!isSaveDB) {
  //         setSaveDB(true);
  //         //crear en db el carrito 1 sola vez
  //         //"guardado el carrito ----> DB"
  //         if (userId) {
  //           Toast.fire({
  //             icon: 'success',
  //             title: 'saving...',
  //           });
  //         }
  //         Swal.showLoading();
  //         await dispatch(createDBCart(cartItems, userId, true));
  //         //"obteniendo carrito ----> DB"
  //         if (userId) {
  //           Toast.fire({
  //             icon: 'success',
  //             title: 'geting cart...',
  //           });
  //         }
  //         Swal.showLoading();
  //         await dispatch(getDBCart(userId));
  //         if (userId) {
  //           Toast.fire({
  //             icon: 'success',
  //             title: 'successfully',
  //           });
  //         }
  //       }
  //     } else {
  //       SignOff();
  //     }
  //   }
  // }, [isSaveDB]);

  useEffect(() => {
    // if (userId) {
    //   setCartItems([...cart]);
    //   //"finalCartDB"
    // }
  }, [cart]);
  //-----------------> Login
  const logIn = () => {
    setUserId(0 /* verificar() */);
    setSaveDB(false);
  };
  const SignOff = async () => {
    setUserId(0 /* verificar() */);
    setCartItems([]);
    // await dispatch(updateToCart([]));
    // await dispatch(clearMyUser());
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
      // dispatch(updateToCart(cartItems));
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
      // } else dispatch(updateToCart(cartItems));

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

        // dispatch(updateToCart(cartItems));
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
  const deleteItemToCart = productInCart => {
    const inCart = cartItems.find(
      proInCart => proInCart.productId === productInCart.productId,
    );
    if (inCart) {
      cartItems.splice(cartItems.indexOf(inCart), 1);
      setCartItems([...cartItems]);

      // dispatch(updateToCart(cartItems));
      // if (userId) {
      //   dispatch(deleteDBCart(inCart.id));
      // }

      // Toast.fire({
      //   icon: 'error',
      //   title: `Product ${inCart.product.name} delete from cart`,
      // });
    }
  };

  return (
    <CartContext.Provider
      value={{
        userId,
        myUser,
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
