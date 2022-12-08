import React, {useContext, useRef, useState} from 'react';
import {ActivityIndicator, View, Image, Animated} from 'react-native';
import {Button, Text} from '@rneui/themed';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {stylesCardProduct} from '../../styles';
import {CartContext} from '../Cart/ShoppingCart';
import CardPrice from '../CardPrice';

function DetailProduct({route, navigation}) {
  const {_id, title, image, description, price} = route.params;
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);
  const [loadingCart, setLoadingCart] = useState(false);
  const inCart = cartItems.find(product => product.productId === _id);

  const selectedAnim = useRef(new Animated.Value(1)).current;

  const off = Math.floor(Math.random() * 20);
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

      <View style={styles.fixToText}>
        <CardPrice price={price} text={off + '% Off'} off={off} />

        <Button
          type="solid"
          buttonStyle={styles.cart}
          loading={loadingCart}
          loadingProps={{
            size: 'small',
            color: 'rgba(111, 202, 186, 1)',
          }}
          onPress={() => {
            Animated.sequence([
              Animated.timing(selectedAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
              }),
            ]).start(({finished}) => {
              if (finished) {
                setLoadingCart(true);
                if (inCart) {
                  new Promise(resolver =>
                    setTimeout(() => resolver(deleteItemToCart(inCart)), 1000),
                  ).then(response => {
                    setLoadingCart(false);
                    Animated.sequence([
                      Animated.timing(selectedAnim, {
                        toValue: 1,
                        duration: 150,
                        useNativeDriver: true,
                      }),
                    ]).start();
                  });

                  // navigation.goBack();
                } else {
                  new Promise(resolver =>
                    setTimeout(
                      () => resolver(addItemToCart(route.params, 1)),
                      1000,
                    ),
                  ).then(response => {
                    setLoadingCart(false);
                    Animated.sequence([
                      Animated.timing(selectedAnim, {
                        toValue: 1,
                        duration: 150,
                        useNativeDriver: true,
                      }),
                    ]).start();
                  });
                }
              }
            });
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
  );
}
const styles = stylesCardProduct;
export default DetailProduct;
