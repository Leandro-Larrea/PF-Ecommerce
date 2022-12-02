import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import {Auth0Provider} from 'react-native-auth0';
import { REACT_APP_DOMAIN, REACT_APP_ID_CLIENT } from "@env"

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
      <Auth0Provider
        domain={REACT_APP_DOMAIN}
        clientId={REACT_APP_ID_CLIENT}
        redirectUri={'https://dev-df4sl8wp8lidlkx3.us.auth0.com/login/callback'}>
        <MainContainer />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
