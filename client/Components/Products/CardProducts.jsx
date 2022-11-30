import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions';
import CardProduct from './CardProduct';

export default function Cards({navegar}) {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
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

  return (
    <View>
      {products && (
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <>
              <CardProduct navegar={navegar} product={item} />
              {}
              {products.length - 1 === index && (
                <View style={{height: 300}}></View>
              )}
            </>
          )}
        />
      )}
    </View>
  );
}
