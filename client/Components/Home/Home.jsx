import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableHighlight, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
/* import { NavBar } from '../NavBar/NavBar' */
import { getCategories, getProducts } from '../../redux/actions';
import AuthenticationButton from '../LogButtons/AuthenticationButton'
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth0} from 'react-native-auth0';

import HomeCategories from './HomeCategories';
import Header from './Header';
import Carousel from './Carousel';



export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector(state => state);

  const {user} = useAuth0();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  const loggedIn = user !== undefined && user !== null;
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>

        <View style={style.header}>
          <Header></Header>
        </View>
        <View style={style.cuenta}>
          <TouchableHighlight style={style.icon} onPress={() => navigation.navigate('My Profile')}>
            <Icon name="person-outline" size={24} color={loggedIn ? '#65AE77' : '#FF4544'} />
          </TouchableHighlight>
          <AuthenticationButton />
        </View>

        <View style={style.content}>
          <Carousel></Carousel>
          <View style={style.categoriaBox}>
            <Text style={style.categoriesText}>SUGGESTED CATEGORIES</Text>
            {categories ? (
              <HomeCategories
                navigation={navigation}
                categories={categories}></HomeCategories>
            ) : (
              <Text>cargando</Text>
            )}
          </View>

        </View>
        {/* <NavBar/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 10,
  },
  header: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    textAlign: 'center',
  },

  categoriaBox: {
    marginTop: -10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flex: 2,
  },
  categoriesText: {
    fontFamily: 'Louis George Cafe Bold',
    fontSize: 18,
    textAlign: 'center',
    flex: 0,
    marginTop: 40,
    marginBottom: 10,
    color: 'black'
  },
  cuenta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 45,
    backgroundColor: '#101010',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10
  }
});
