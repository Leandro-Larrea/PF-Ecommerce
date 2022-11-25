import React, {useEffect} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions';
import CardProduct from './CardProduct';

// import Card from "./Card";

export default function Cards() {
  const dispatch = useDispatch();

  const {products} = useSelector(state => state.products);
  //   const products = data.products;

  useEffect(() => {
    async function ejet() {
      if (!products) {
        await dispatch(getProducts());
      } else {
        console.log('cards', products?.[0]);
      }
    }
    ejet();
  }, [products]);

  return (
    <View>
      {products && (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <CardProduct
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              key={item._id}
            />
          )}
        />
      )}
    </View>
  );
}
