import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';

// axios.defaults.baseURL = 'http://192.168.100.32:3001';
axios.defaults.baseURL = 'https://pf-ecommerce-rho.vercel.app';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Components/Home/Home';
import { LookProducts } from './Components/LookProducts/LookProducts'; */

const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <MainContainer />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
