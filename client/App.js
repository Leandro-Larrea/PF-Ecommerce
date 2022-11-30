import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import store from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import {CartProvider} from './Components/Cart/ShoppingCart';
import {createStackNavigator} from '@react-navigation/stack';
import DetailProduct from './Components/Products/DetailProduct';
import {NavigationContainer} from '@react-navigation/native';

axios.defaults.baseURL = 'http://192.168.18.25:3001';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Components/Home/Home';
import { LookProducts } from './Components/LookProducts/LookProducts'; */

const Stack = createStackNavigator();
const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name={'Main'} component={MainContainer} />
            <Stack.Screen name={'DetailProduct'} component={DetailProduct} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </Provider>
  );
};

export default App;
