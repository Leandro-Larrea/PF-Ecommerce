import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//Screens
import { Home } from '../Home/Home';
import { LookProducts } from '../LookProducts/LookProducts';
import { Cart } from '../Cart/Cart'

//Screen-Name

const homeName = 'Home';
const lookProductsName = 'Products';
const cartName = 'Cart';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home-sharp' : 'home-outline';
                } else if (rn === lookProductsName) {
                    iconName = focused ? 'search-sharp' : 'search-outline';
                } else if (rn === cartName) {
                    iconName = focused ? 'cart-sharp' : 'cart-outline';
                }
                return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "tomato"
        })}> 

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={lookProductsName} component={LookProducts} />
        <Tab.Screen name={cartName} component={Cart} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}
