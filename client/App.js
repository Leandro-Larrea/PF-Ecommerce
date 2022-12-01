import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import {Auth0Provider} from 'react-native-auth0';
//import config from './Auth0/auth0-config'

// axios.defaults.baseURL = 'http://192.168.100.32:3001';
axios.defaults.baseURL = 'https://pf-ecommerce-rho.vercel.app';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Components/Home/Home';
import { LookProducts } from './Components/LookProducts/LookProducts'; */
// const DOMAIN = config.domain
// const CLIENT_ID = config.clientId

const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={'dev-df4sl8wp8lidlkx3.us.auth0.com'}
        clientId={'i27bkoZvpjiQeyGa69XdzT1JcWnDf0Cn'}
        redirectUri={'/Home'}>

        <MainContainer />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
