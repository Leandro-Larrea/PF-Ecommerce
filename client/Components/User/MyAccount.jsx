import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Profile } from './Profile';
import { PostUser } from './PostUser';
import { Purcheases } from './Purcheases';

const Tab = createMaterialTopTabNavigator()


export const MyAccount = () => {
  return (
    <Tab.Navigator initialRouteName='Profile'>
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='PostUser' component={PostUser} />
        <Tab.Screen name='Purcheases' component={Purcheases} />
    </Tab.Navigator>
  )
}
