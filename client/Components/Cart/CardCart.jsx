import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  //   Button,
  TouchableOpacity,
} from 'react-native';
import {stylesCardCart} from '../../styles';
import {CartContext} from './ShoppingCart';
import {Button} from '@rneui/themed';

function Card({productInCart, navegar}) {
  const {updateItemToCart, subtractItemToCart, deleteItemToCart} =
    useContext(CartContext);
  const {image, title, price} = productInCart.product;
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          style={styles.image}
          source={{
            uri: image.toString(),
          }}
        />
      </View>
      <View style={{flex: 5}}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{price}$</Text>
        </View>
        <Button title="View" onPress={() => navegar(productInCart.product)} />
      </View>
      <View style={{flex: 2}}>
        <Button
          title="x"
          onPress={() => {
            deleteItemToCart(productInCart.product);
          }}
        />
        <View style={stylesCardCart.containerBttnsCart}>
          <Button
            style={{flex: 1}}
            title="-"
            onPress={() => subtractItemToCart(productInCart.product)}
          />
          <Text style={{flex: 1}}>{productInCart.quantity}</Text>
          <Button
            title="+"
            style={{flex: 1, color: 'black'}}
            onPress={() => updateItemToCart(productInCart)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = stylesCardCart;
export default Card;
