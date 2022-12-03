import React from 'react';
import { MainContainer } from './Components/MainContainer/MainContainer';
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { CartProvider } from './Components/Cart/ShoppingCart';
import { createStackNavigator } from '@react-navigation/stack';
import DetailProduct from './Components/Products/DetailProduct';
import { NavigationContainer } from '@react-navigation/native';
import { Pay } from './Components/Stripe/Pay';
import { StripeProvider } from '@stripe/stripe-react-native';

axios.defaults.baseURL = 'https://pf-ecommerce-rho.vercel.app';


const Stack = createStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <CartProvider>
          <StripeProvider publishableKey='pk_test_51MAHh5BMOrGzu3h6xWovI9a9tAY6YXTIY4VllgaV3F3lk716NehzrQUhngQI2KXUQo2kVyZouPLLiYqbLDD1ncRL00D2io0vNo'>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name={'Main'} component={MainContainer} />
              <Stack.Screen name={'DetailProduct'} component={DetailProduct} />
              <Stack.Screen name={'Pay'} component={Pay} />
            </Stack.Navigator>
        </NavigationContainer>
          </StripeProvider>
      </CartProvider>
    </Provider>
  );
};

export default App;
