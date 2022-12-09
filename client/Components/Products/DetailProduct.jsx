import React, {useRef,useContext,useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Image,
  VirtualizedList
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { stylesDetails } from '../../styles';
import {CartContext} from '../Cart/ShoppingCart';
import {Button, Text} from '@rneui/themed';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from './Rating'
import Reviews from './Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/actions';




function DetailProduct({route, navigation}) {


  const {_id, title, image, description, price,stock,rating,reviews} = route.params;
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext);
  const inCart = cartItems.find(product => product.productId === _id);

  const selectedAnim = useRef(new Animated.Value(1)).current;

  const CustomTitle = () => {
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#89c30d'}}>
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
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getReviews(_id))
    
  },[])
  

  return (
  <ScrollView>
    <View style={styles.container} title={title} scrollEnabled={true}> 
      <View style={styles.productCard}>
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
     <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.description}>{description}</Text>
  
      <Rating rating={rating}/>
      <View style={styles.data}>
      <Text style={styles.price} numberOfLines={2}>
       US$ {price}
      </Text>
    
      <Text style={styles.stock}>{stock+' (stock)'}</Text>

      </View>


      <View style={styles.fixToText}>
        {/* <Button type="solid" buttonStyle={styles.price}>
          US${price}
        </Button> */}
        {/* <Button
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
        /> */}

        <Button
          type="solid"
          buttonStyle={styles.cart}
          color={'#89c30d'}
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
              // 
              return;
            }
            addItemToCart(route.params, 1);
          }}>
          <Animated.View style={[{transform: [{scale: selectedAnim}]}]}>
            <IconMC
              size={20}
              name={inCart ? 'cart-off' : 'cart-plus'}
              color={inCart ? '#FF4544' : 'white'}
            />
          </Animated.View>
        </Button>
      </View>
      </View>
      <View style={styles.reviews}>
       
        <Reviews product={_id}/>

      </View>

    </View>
   </ScrollView>
  );
}

const styles = stylesDetails

export default DetailProduct;
