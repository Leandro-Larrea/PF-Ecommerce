import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//Screens
import { Home } from '../Home/Home';
import { LookProducts } from '../LookProducts/LookProducts';
import { Cart } from '../Cart/Cart'
import { PostProduct } from '../PostProduct/PostProduct';

//Screen-Name

const homeName = 'Home';
const lookProductsName = 'Products';
const cartName = 'Cart';
const postName = 'Post';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
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
                } else if (rn === postName ) {
                    iconName = focused ? 'add-circle-sharp' : 'add-circle-outline'
                }
                return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "tomato"
        })}> 

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={lookProductsName} component={LookProducts} />
        <Tab.Screen name={cartName} component={Cart} />
        <Tab.Screen name={postName} component={PostProduct}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}
