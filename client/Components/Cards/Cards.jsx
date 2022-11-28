import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getProducts} from '../../redux/actions';
import Select from '../Filters/Select';
import {SearchBar} from '../SearchBar/SearchBar';
import CardProduct from './CardProduct';

export default function Cards({navigation}) {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.products);
  const {products} = useSelector(state => state.products);

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, []);
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
  function navegar(product) {
    navigation.navigate('Detail', product);
  }

  return (
    <View>
      <SearchBar />
      <View>
        {categories ? (
          <Select categories={categories}></Select>
        ) : (
          <Text>no se renderizo</Text>
        )}
      </View>
      {products && (
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <>
              <CardProduct
                navegar={navegar}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                key={item._id}
              />
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
