import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Profile } from './Profile';
import { PostUser } from './PostUser';
import { Purchases } from './Purchases';

const Tab = createMaterialTopTabNavigator()


export const MyAccount = () => {
  return (
    <Tab.Navigator initialRouteName='Profile'>
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Edit data' component={PostUser} />
        <Tab.Screen name='Purchases' component={Purchases} />
    </Tab.Navigator>
  )
}
