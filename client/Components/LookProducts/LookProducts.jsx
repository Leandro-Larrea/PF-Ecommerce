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
import PriceFilter from '../Filters/PriceFilter';

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
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <SearchBar />
        <View style={styles.main}>
          <View style={styles.showAll}>
            <ShowAll />
          </View>
        </View>
        <View style={styles.filterContainer}>
          {categories ? (
            <Select categories={categories}></Select>
          ) : (
            <Text>no se renderizo</Text>
          )}
          <View>
            <SearchBar navigation={navigation} />
            <View style={styles.main}>
              <Sort />
            </View>
            <PriceFilter />
          </View>
        </View>
      </View>
      <View style={{flex: 5}}>
        <Cards navegar={navegar} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterContainer: {
    flexDirection: 'row',
    margin: 10,
    zIndex: 1,
  },

  showAll: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
});
