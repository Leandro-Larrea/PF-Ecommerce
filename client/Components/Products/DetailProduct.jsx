import React, { useRef, useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Image,
  VirtualizedList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { stylesDetails } from '../../styles';
import { CartContext } from '../Cart/ShoppingCart';
import CardPrice from '../CardPrice';
import { Button, Text } from '@rneui/themed';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from './Rating';
import Reviews from './Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { clean, getProductByPK, getReviews, getUser } from '../../redux/actions';
import { useAuth0 } from 'react-native-auth0';

function DetailProduct({ route, navigation }) {

  const { _id, title, image, price } = route.params;
  const { cartItems, addItemToCart, deleteItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const { detailProduct } = useSelector(state => state);
  console.log("detalleProducto", detailProduct);
  const [loadingCart, setLoadingCart] = useState(false);
  const inCart = cartItems.find(product => product.productId === _id);
  const reviews = useSelector(state => state.productReview)
  const selectedAnim = useRef(new Animated.Value(1)).current;
  const off = Math.floor(Math.random() * 20);
  const { user } = useAuth0();


  useEffect(() => {
    dispatch(getReviews(_id));
    dispatch(getProductByPK(_id));

    if (user) {
      dispatch(getUser(user.sub))
    }

    return () => {
      dispatch(clean());
    }
  }, []);

  /* useEffect(() => {
    dispatch(getProductByPK(_id));
    
  },[]) */
  return (

    <ScrollView style={styles.container}>
      {detailProduct === 'product not found' ? 
      <View>
        <Image source={require('../../images/noProducts.png')} style={{ flex:1, height: 400, width: 400,  alignSelf: "center", backgroundColor: "white" }} />
      </View> :
      <View title={title} scrollEnabled={true}>
        <View style={styles.productCard}>
          <Image
            //   defaultSource={require('../../android/app/src/main/assets/')}
            /*  onProgress={(loaded, total) => {
              console.log(loaded);
            }} */
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="contain"
            source={{ uri: image.toString() }}
            />
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.separator} />
          {detailProduct && (
            <Text style={styles.description}>{detailProduct.description}</Text>
            )}

          {detailProduct && detailProduct.rating ? <Rating rating={detailProduct.rating} productId={_id} />
            : <Text>no rating</Text>
          }

          <View style={styles.fixToText}>
            <CardPrice price={price} text={off + '% Off'} off={off} />
            {detailProduct && detailProduct.stock > 0 ?
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
                ]).start(({ finished }) => {
                  if (finished) {
                    setLoadingCart(true);
                    if (inCart) {
                      new Promise(resolver =>
                        resolver(deleteItemToCart(inCart)),
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
                          
                          resolver(addItemToCart(detailProduct, 1)),
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
                <Animated.View style={[{ transform: [{ scale: selectedAnim }] }]}>
                  <IconMC
                    size={20}
                    name={inCart ? 'cart-off' : 'cart-plus'}
                    color={inCart ? '#FF4544' : '#65AE77'}
                    />
                </Animated.View>
              </Button>
              :
              <Text>No Stock Available</Text>}
          </View>
        </View>
        {reviews && (
          <View style={styles.reviews}>
            <Reviews reviews={reviews} productId={_id} />
          </View>
        )}
      </View>
  }
    </ScrollView>
  );
}

const styles = stylesDetails;

export default DetailProduct;
