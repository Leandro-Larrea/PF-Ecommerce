import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions';
import CardProduct from './CardProduct';
import {FlashList} from '@shopify/flash-list';

import image from '../../images/noProducts.png';

export default function Cards({navegar}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    async function ejet() {
      if (!products) {
        await dispatch(getProducts());
      } 
    }
    ejet();
  }, [products]);

  const _renderitem = ({item}) => (
    <CardProduct navegar={navegar} product={item} />
  );

  return (
    <View style={{height: '100%', width: Dimensions.get('screen').width}}>
      {products == 'No existe' ? (
        <View style={styles.imgMain}>
          <Image style={styles.image} source={image} />
        </View>
      ) : (
        <FlashList
          data={products}
          renderItem={_renderitem}
          estimatedItemSize={100}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imgMain: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 250,
    width: 250,
  },
});
