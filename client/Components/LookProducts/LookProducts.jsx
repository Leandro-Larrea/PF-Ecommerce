import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ShowAll from '../Filters/ShowAll';
import Sort from '../Filters/Sort';
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

      <View style={styles.showAll}>
        <ShowAll />
      </View>

      <View style={styles.filterContainer}>
        {categories ? (
          <Select categories={categories}></Select>
        ) : (
          <Text>no se renderizo</Text>
        )}

        <Sort />
      </View>
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
const styles = StyleSheet.create({
  main: {
    backgroundColor: '2d2d2d',
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 80,
    zIndex: 1,
    marginTop: 10,
  },

  showAll: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
