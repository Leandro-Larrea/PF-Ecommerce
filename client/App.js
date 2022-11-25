import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.18.25:3001';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Components/Home/Home';
import { LookProducts } from './Components/LookProducts/LookProducts'; */

const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
