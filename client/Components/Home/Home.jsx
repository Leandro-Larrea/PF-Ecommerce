import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
/* import { NavBar } from '../NavBar/NavBar' */
import {getCategories, getProducts} from '../../redux/actions';
import AuthenticationButton from '../LogButtons/AuthenticationButton'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeCategories from './HomeCategories';
import Header from './Header';

export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, categories} = useSelector(state => state);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Header></Header>
      </View>
      <View style={style.cuenta}>
        <AuthenticationButton/>
        <TouchableHighlight onPress={()=> navigation.navigate('Profile')}>
            <Icon name="person-outline" size={28} color="#6A37C4" />
        </TouchableHighlight>
      </View>
      <View style={style.content}>
        <View style={style.ofertaBox}>
          <Text>OFERTAS 🔥</Text>
        </View>
        <View style={style.categoriaBox}>
          <Text style={style.categoriesText}>Suggested categories</Text>
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
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 10,
    padding: 5,
  },
  header: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerText: {
    textAlign: 'center',
  },
  ofertaBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    backgroundColor: '#6A37C4',
  },
  categoriaBox: {
    marginTop: -10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flex: 2,
  },
  categoriesText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 0,
    marginTop: 50,
  },
  cuenta: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});
