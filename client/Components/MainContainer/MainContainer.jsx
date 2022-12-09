import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth0} from 'react-native-auth0';

//Screens
import {Home} from '../Home/Home';
import {LookProducts} from '../LookProducts/LookProducts';
import ListCart from '../Cart/ListCart';
import {Profile} from '../User/Profile';
import {PostUser} from '../User/PostUser';
import { MyAccount } from '../User/MyAccount';
import ScreenLogin from '../LogButtons/ScreenLogin';

//Screen-Name

const homeName = 'Home';
const lookProductsName = 'Products';
const cartName = 'Cart';
//const profile = 'Profile';
const myAccount = 'My Account';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingTop: 2,
          backgroundColor: 'rgba(34,36,40,1)',
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (rn === lookProductsName) {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (rn === cartName) {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (rn === myAccount) {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#89c30d',
      })}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={lookProductsName} component={LookProducts} />
      <Tab.Screen name={cartName} component={ListCart} />
      {/* <Tab.Screen name={postName} component={loggedIn ? PostUser : Profile} /> */}
      <Tab.Screen name={myAccount} component={loggedIn ? MyAccount : ScreenLogin} />
    </Tab.Navigator>
  );
};
