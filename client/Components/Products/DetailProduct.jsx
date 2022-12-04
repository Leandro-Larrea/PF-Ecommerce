import React, {useContext} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {stylesCardProduct} from '../../styles';
import {CartContext} from '../Cart/ShoppingCart';

function DetailProduct({route, navigation}) {
  const {_id, title, image, description, price} = route.params;
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);
  const inCart = cartItems.find(product => product.productId === _id);
  return (
    <View style={styles.container} title={title}>
      <Image
        //   defaultSource={require('../../android/app/src/main/assets/')}
        /*  onProgress={(loaded, total) => {
        console.log(loaded);
      }} */
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
        source={{uri: image.toString()}}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price} numberOfLines={2}>
        {price}$
      </Text>
      <View style={styles.fixToTextDetail}>
        <Button
          title={inCart ? 'DEL CART' : 'ADD CART'}
          color={inCart ? '#FF4544' : '#65AE77'}
          style={{margin: 10}}
          onPress={() => {
            if (inCart) {
              deleteItemToCart(route.params);
              navigation.goBack();
              return;
            }
            addItemToCart(route.params, 1);
          }}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>
    </View>
  );
}
const styles = stylesCardProduct;
export default DetailProduct;
