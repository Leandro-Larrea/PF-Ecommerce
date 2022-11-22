
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from './Components/Landing/Landing';
import { Home } from './Components/Home/Home';

const App= () => {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
