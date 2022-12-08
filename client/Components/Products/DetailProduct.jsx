import React, {useContext, useRef, useState} from 'react';
import {ActivityIndicator, View, Image, Animated} from 'react-native';
import {Button, Text} from '@rneui/themed';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {stylesCardProduct} from '../../styles';
import {CartContext} from '../Cart/ShoppingCart';
function DetailProduct({route, navigation}) {
  const {_id, title, image, description, price} = route.params;
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);
  const inCart = cartItems.find(product => product.productId === _id);

  const selectedAnim = useRef(new Animated.Value(1)).current;

  const CustomTitle = () => {
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#adff2f'}}>
          {price}
          <Text style={{color: '#91AB5A'}}>$</Text>
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 12,
            color: 'white',
          }}>
          USD
        </Text>
      </View>
    );
  };
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
        {/* <Button type="solid" buttonStyle={styles.price}>
          US${price}
        </Button> */}
        <Button
          title={<CustomTitle />}
          titleStyle={{fontWeight: 'bold', fontSize: 18}}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 5,

            backgroundColor: '#2d2d2d',
          }}
          containerStyle={
            {
              // width: 200,
              // marginHorizontal: 50,
              // marginVertical: 10,
            }
          }
          iconRight
          iconContainerStyle={{marginLeft: 10, marginRight: -10}}
        />

        <Button
          type="solid"
          buttonStyle={styles.cart}
          onPress={() => {
            Animated.sequence([
              Animated.timing(selectedAnim, {
                toValue: 1.5,
                duration: 300,
                useNativeDriver: true,
              }),
              Animated.timing(selectedAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }),
            ]).start();
            if (inCart) {
              deleteItemToCart(inCart);
              // navigation.goBack();
              return;
            }
            addItemToCart(route.params, 1);
          }}>
          <Animated.View style={[{transform: [{scale: selectedAnim}]}]}>
            <IconMC
              size={26}
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
