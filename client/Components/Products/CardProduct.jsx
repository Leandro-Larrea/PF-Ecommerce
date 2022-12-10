import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator, Animated, Image, View, TouchableOpacity} from 'react-native';
import storage from '../AsyncStorage/AsyncStorage';
import {CartContext} from '../Cart/ShoppingCart';
import {useContext, memo, useRef} from 'react';
import {stylesCardProduct} from '../../styles';
import {useAuth0} from 'react-native-auth0';
import {Button, Text} from '@rneui/themed';
import CardPrice from '../CardPrice';

const CardProduct = ({navegar, product}) => {
  let {_id, title, image, description, price} = product;

  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);

  const inCart = cartItems.find(product => product.productId === _id);
  const {user} = useAuth0(); //Auht0
  const {authorize} = useAuth0(); //Auht0
  //---Auht0
  const handleLogin = async () => {
    return await authorize();
  };

  const selectedAnim = useRef(new Animated.Value(1)).current;
  const handleButtonAdd = async inCart => {
    Animated.sequence([
      Animated.timing(selectedAnim, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(selectedAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    if (inCart) await deleteItemToCart(inCart);
    else await addItemToCart(product);
  };
  const off = Math.floor(Math.random() * 20);
  return (
    <TouchableOpacity style={styles.container} title={title} onPress={() => {
      navegar(product);
    }}>
      <Image
        //   defaultSource={require('../../android/app/src/main/assets/')}
        /*  onProgress={(loaded, total) => {
          console.log(loaded);
        }} */
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
        source={{uri: image && image.toString()}}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <View style={styles.fixToText}>
        <CardPrice price={price} text={off + '% Off'} off={off} />
        <View style={{flexDirection: 'row'}}>
          <Button
            color={'#2d2d2d'}
            title={'VIEW'}
            onPress={() => {
              navegar(product);
            }}></Button>

          <Button
            type="solid"
            buttonStyle={styles.cart}
            onPress={() => {
              handleButtonAdd(inCart);
            }}>
            <Animated.View style={[{transform: [{scale: selectedAnim}]}]}>
              <IconMC
                size={20}
                name={inCart ? 'cart-off' : 'cart-plus'}
                color={inCart ? '#FF4544' : '#65AE77'}
              />
            </Animated.View>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = stylesCardProduct;
export default memo(CardProduct);


