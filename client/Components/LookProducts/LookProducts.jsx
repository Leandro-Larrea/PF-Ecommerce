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
      <View>
        <View style={styles.filterContainer}>
          <SearchBar navigation={navigation} />
          <View style={styles.showAll}>
            <ShowAll />
          </View>
          <View style={styles.filterRow}>
            {categories && <Select categories={categories}></Select>}
            <View>
              <Sort />
            </View>
          </View>
          
          <PriceFilter />
        </View>
      </View>
      <View style={{flex: 5,position:"relative", zIndex:1}}>
        <Cards navegar={navegar} />
      </View>
    </View>
  );
};
const gap = 6;
const styles = StyleSheet.create({
  main: {
    paddingBottom:(gap/2),
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
   filterRow:{
    margin:(gap/2),
     zIndex:10,
     flexDirection:"row",
     position:"relative",
     height:50,
     justifyContent:"space-around",
     flexWrap:"wrap",
     maxWidth:"100%"
   },
  filterContainer: { 
    marginBottom:(gap/2),
    position:"relative",
    zIndex: 5, 
  },

  showAll: {
    margin:(gap/2),
    flexDirection: 'column',
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
