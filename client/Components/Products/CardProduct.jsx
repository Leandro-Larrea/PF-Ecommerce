import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import storage from '../AsyncStorage/AsyncStorage';
import {CartContext} from '../Cart/ShoppingCart';
import {useContext, memo} from 'react';
import {stylesCardProduct} from '../../styles';

const CardProduct = ({navegar, product}) => {

  let {_id, title, image, description, price} = product;

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
        source={{uri: image &&  image.toString()}}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
      <View style={styles.fixToText}>
        <Button
          title={'VIEW'}
          onPress={() => {
            navegar(product);
          }}></Button>

        <Button
          title={inCart ? 'DEL CART' : 'ADD CART'}
          color={inCart ? '#FF4544' : '#65AE77'}
          style={{margin: 10}}
          onPress={async () => {
            if (inCart) {
              deleteItemToCart(product);
              return;
            }
            addItemToCart(product, 1);
          }}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>

    </View>
  );
};
const styles = stylesCardProduct;
export default memo(CardProduct);
