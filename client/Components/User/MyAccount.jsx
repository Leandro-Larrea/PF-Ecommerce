import React, { useEffect } from 'react';
import { getUser } from '../../redux/actions';
import {useAuth0} from 'react-native-auth0';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Profile } from './Profile';
import { PostUser } from './PostUser';
import { Purchases } from './Purchases';
import { useDispatch, useSelector } from 'react-redux';

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
