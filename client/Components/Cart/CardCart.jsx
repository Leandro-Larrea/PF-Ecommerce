import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  //   Button,
  TouchableOpacity,
} from 'react-native';
import {stylesCardCart} from '../../styles';
import {CartContext} from './ShoppingCart';
import {Button, Text} from '@rneui/themed';
import IconAwe5 from 'react-native-vector-icons/FontAwesome5';
import IconAwe from 'react-native-vector-icons/FontAwesome';

function Card({productInCart, navegar, index, aniRemoveItem}) {
  const {updateItemToCart, subtractItemToCart, deleteItemToCart} =
    useContext(CartContext);
  const {image, title, price} = productInCart.product;
  return (
    <View key={index} style={styles.container}>
      <View style={{flex: 2, marginRight: 10}}>
        <Image
          style={styles.image}
          source={{
            uri: image.toString(),
          }}
        />
      </View>
      <View style={{flex: 5}}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text>{price}$</Text>
        </View>
        <Button type="clear" onPress={() => navegar(productInCart.product)}>
          <IconAwe5 style={{marginRight: 10}} name="eye" color="blue" />
          View
        </Button>
      </View>
      <View style={{flex: 2, alignItems: 'flex-end'}}>
        <Text
          style={{
            padding: 5,
            backgroundColor: '#FF6C6A',
            borderRadius: 10,
            color: 'white',
            textAlign: 'center',
            paddingVertical: 5,
            marginBottom: 10,
          }}
          onPress={async () => {
            await aniRemoveItem(productInCart);
            await deleteItemToCart(productInCart);
          }}>
          <IconAwe name="close" color="white" />
        </Text>
        <View style={{flex: 1}}></View>
        <View style={stylesCardCart.containerBttnsCart}>
          <Text
            style={{flex: 1, padding: 5}}
            onPress={() => {
              subtractItemToCart(productInCart);
            }}>
            <IconAwe5 name="minus" color="black" />
          </Text>
          <Text style={{flex: 1}}>{productInCart.quantity}</Text>
          <Text
            style={{flex: 1, padding: 5}}
            onPress={() => updateItemToCart(productInCart)}>
            <IconAwe5 name="plus" color="black" />
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = stylesCardCart;
export default Card;
