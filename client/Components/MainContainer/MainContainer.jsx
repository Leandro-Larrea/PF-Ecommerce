import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth0} from 'react-native-auth0';

//Screens
import {Home} from '../Home/Home';
import {LookProducts} from '../LookProducts/LookProducts';
import ListCart from '../Cart/ListCart';
import {PostProduct} from '../PostProduct/PostProduct';
import {Profile} from '../LogButtons/Profile';
//Screen-Name

const homeName = 'Home';
const lookProductsName = 'Products';
const cartName = 'Cart';
const postName = 'Post';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
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
          } else if (rn === postName) {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
      })}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={lookProductsName} component={LookProducts} />
      <Tab.Screen name={cartName} component={loggedIn ? ListCart : Profile} />
      <Tab.Screen name={postName} component={PostProduct} />
    </Tab.Navigator>
  );
};
