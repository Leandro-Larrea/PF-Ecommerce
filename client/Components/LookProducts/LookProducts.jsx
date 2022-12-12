import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sort from '../Filters/Sort';
import { SearchBar } from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'

//--componentes---
import Cards from '../Products/CardProducts.jsx';
import Select from '../Filters/Select';
import { getCategories } from '../../redux/actions';
import PriceFilter from '../Filters/PriceFilter';

export const LookProducts = ({ navigation }) => {
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

  const [filters, setFilters] = useState({
    title: '',
    min: '',
    max: '',
    category: '',
  })
  useEffect(() => {
  }, [filters])
  const fcUpdate = (input, value) => {
    setFilters({ ...filters, [input]: value })
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <LinearGradient colors={['#2d2d2d', 'white',]} style={{ borderBottomWidth: 1.12, zIndex: 10 }}>

          <View style={styles.filterContainer}>
            <SearchBar navigation={navigation} filters={filters} fcUpdate={fcUpdate} />
            <View style={styles.showAll}>
              {/* <ShowAll /> */}
            </View>
            <View style={styles.filterRow}>
              {categories && <Select categories={categories} filters={filters} fcUpdate={fcUpdate}></Select>}
              <View>
                <Sort filters={filters} fcUpdate={fcUpdate} />
              </View>
            </View>

            <PriceFilter filters={filters} fcUpdate={fcUpdate} />
          </View>
        </LinearGradient>
      </View>
      <View style={{ flex: 5, position: "relative", zIndex: 1, backgroundColor: "#bfbfbf" }}>
        <Cards navegar={navegar} />
      </View>
    </View>
  );
};
const gap = 3;
const styles = StyleSheet.create({
  main: {
    paddingBottom: (gap / 2),
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',

  },
  filterRow: {
    margin: (gap / 2),
    zIndex: 10,
    flexDirection: "row",
    position: "relative",
    height: 50,
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
  filterContainer: {
    marginBottom: (gap / 2),
    paddingBottom: (gap / 2 + 4),
    position: "relative",
    zIndex: 5,
  },

  showAll: {
    margin: (gap / 2),
    flexDirection: 'column',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',

  },
});
