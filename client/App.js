import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import store from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import {Auth0Provider} from 'react-native-auth0';
import {REACT_APP_DOMAIN, REACT_APP_ID_CLIENT} from '@env';

// axios.defaults.baseURL = 'http://192.168.0.161:3001';
 axios.defaults.baseURL = 'https://pf-ecommerce-rho.vercel.app';
import {CartProvider} from './Components/Cart/ShoppingCart';
import {createStackNavigator} from '@react-navigation/stack';
import DetailProduct from './Components/Products/DetailProduct';
import {NavigationContainer} from '@react-navigation/native';
import {Pay} from './Components/Stripe/Pay';
import {StripeProvider} from '@stripe/stripe-react-native';
import {Profile} from './Components/User/Profile';
import {ProfileEdit} from './Components/User/ProfileEdit';
import { PostUser } from './Components/User/PostUser';

axios.defaults.baseURL = 'http://192.168.0.94:3001';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={REACT_APP_DOMAIN}
        clientId={REACT_APP_ID_CLIENT}
        redirectUri={
          'https://dev-df4sl8wp8lidlkx3.us.auth0.com/login/callback'
        }>
        <CartProvider>
          <StripeProvider publishableKey="pk_test_51MAHh5BMOrGzu3h6xWovI9a9tAY6YXTIY4VllgaV3F3lk716NehzrQUhngQI2KXUQo2kVyZouPLLiYqbLDD1ncRL00D2io0vNo">
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                  name={'Main'}
                  component={MainContainer}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={'DetailProduct'}
                  component={DetailProduct}
                />
                <Stack.Screen name={'ProfileEdit'} component={ProfileEdit} />
                <Stack.Screen name={'Pay'} component={Pay} />
                 { <Stack.Screen name={'Post'} component={PostUser} />  }
              </Stack.Navigator>
            </NavigationContainer>
          </StripeProvider>
        </CartProvider>
      </Auth0Provider>
    </Provider>
  );
};

export default App;
