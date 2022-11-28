import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchBar} from '../SearchBar/SearchBar';

import Detail from '../Detail/Detail';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions';

const Stack = createStackNavigator();

//--componentes---
import Cards from '../Cards/Cards.jsx';

export const LookProducts = () => {
  return (
    <Stack.Navigator initialRouteName="Cards">
      <Stack.Screen name={'Cards'} component={Cards} />
      <Stack.Screen name={'Detail'} component={Detail} />
    </Stack.Navigator>
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
