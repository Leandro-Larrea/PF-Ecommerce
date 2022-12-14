import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Button, FlatList, LayoutAnimation, Alert } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { CartContext } from './ShoppingCart';
import CardCart from './CardCart';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRICE } from '../../redux/actions';

const ListCart = ({ navigation }) => {

  const userDb = useSelector(state => state.user)

  const dispatch = useDispatch();
  const { cartItems, resetCart, addItemToCart, deleteItemToCart } =
    useContext(CartContext);
  const [data, setData] = useState([...cartItems]);
  const list = useRef(FlashList);
  useEffect(() => {
    setData([...cartItems]);
  }, [cartItems]);
  const aniRemoveItem = item => {
    setData(
      data.filter(dataItem => {
        return dataItem !== item;
      }),
    );
    // This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.
    // After removing the item, we can start the animation.
    list.current?.prepareForLayoutAnimationRender();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };
  const precios =
    cartItems.length > 0
      ? cartItems.map(e => e.product.price * e.quantity)
      : '';
  let total =
    precios.length > 0 ? precios.reduce((prev, curr) => prev + curr) : 0;
  const final = total ? total.toFixed(2) : 0;

  const detalleCompra = { userId: userDb?._id, 
  cartItems: cartItems.length > 0 ?
  cartItems.map(e => { return {productId: e.productId, quantity:  e.quantity, price: e.product.price}})
  : ''
  }

  const onPress = () => {
    if (userDb === null || !Object.keys(userDb).length > 0) {
      return Alert.alert('Please Complete your Profile Information')
    } else if (final === 0) {
      Alert.alert('You need to add items to the Cart to Checkout')
    } else {
      dispatch({ type: SET_PRICE, payload: { price: total, detalle : detalleCompra} });
      navigation.navigate('Pay');
    }
  };
  function navegar(product) {
    navigation.navigate('DetailProduct', product);
  }
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Button title="Reset" onPress={resetCart} />
        <Text>Carrito de Compras: {cartItems?.length} </Text>
      </View>
      <View style={{ flex: 1 }}>
        {!!data?.length && (
          <FlashList
            ref={list}
            data={data}
            renderItem={({ item, index }) => (
              <CardCart
                navegar={navegar}
                productInCart={item}
                index={index}
                aniRemoveItem={aniRemoveItem}
              />
            )}
            keyExtractor={(item, index) => index}
            estimatedItemSize={data.length}
          />
        )}
      </View>
      <View>
        <Button
          color="green"
          title={`Pay Now $${final} USD`}
          onPress={onPress}
        />
      </View>
    </View>
  );
};
export default ListCart;
