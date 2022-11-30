import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from '../SearchBar/SearchBar';

import Detail from '../Products/DetailProduct';
import {useDispatch, useSelector} from 'react-redux';

//--componentes---
import Cards from '../Products/CardProducts.jsx';
import Select from '../Filters/Select';
import {getCategories} from '../../redux/actions';

export const LookProducts = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, []);
  function navegar(product) {
    navigation.navigate('DetailProduct', product);
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
      <Cards navegar={navegar} />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    backgroundColor: 'red',
  },
  play: {
    height: '100%',
  },
});
