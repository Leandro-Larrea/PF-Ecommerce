import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
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
      } /* else {
        console.log('cards', products?.[0]);
      } */
    }
    ejet();
  }, [products]);

  const _renderitem = ({item}) => (
    <CardProduct navegar={navegar} product={item} />
  );

  return (
    <>
      {products == 'No existe' ? (
        <View style={styles.imgMain}>
          <Image style={styles.image} source={image} />
        </View>
      ) : (
        products && (
          <FlashList
            initialNumToRender={2}
            data={products}
            renderItem={_renderitem}
            estimatedItemSize={products.length}
          />
        )
      )}
    </>
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
