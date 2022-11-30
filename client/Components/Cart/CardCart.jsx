import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {stylesCardCart, stylesCardProduct} from '../../styles';
import {CartContext} from './ShoppingCart';

function Card({productInCart, navegar}) {
  const {addItemToCart, subtractItemToCart, deleteItemToCart} =
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
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button
            title="+"
            onPress={() =>
              addItemToCart(productInCart.product, ++productInCart.quantity)
            }
          />
          <Text>{productInCart.quantity}</Text>
          <Button
            title="-"
            onPress={() => subtractItemToCart(productInCart.product)}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Button
          title="x"
          onPress={() => {
            deleteItemToCart(productInCart.product);
          }}
        />
        <Button title="View" onPress={() => navegar(productInCart.product)} />
      </View>
    </View>
  );
}

const styles = stylesCardCart;
export default Card;
