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
import {useAuth0} from 'react-native-auth0'

function DetailProduct({route, navigation}) {
  const {_id, title, image, description, price} = route.params;
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);
  const inCart = cartItems.find(product => product.productId === _id);
  //---Auht0
  const {user} = useAuth0();
  const {authorize} = useAuth0();
  const handleLoginD = async () => {
    return await authorize()
  }

  const handleButtonAddD = async (inCart) => {
    if(inCart) {
      await deleteItemToCart(route.params)
      navigation.goBack();
    }
    else await addItemToCart(route.params, 1)
  }

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
            user ?
            handleButtonAddD(inCart)
            :
            handleLoginD()
          }}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>
    </View>
  );
}
const styles = stylesCardProduct;
export default DetailProduct;
