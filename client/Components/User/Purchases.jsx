import React from 'react'
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import { Text, View } from 'react-native'
import { stylesCardProduct } from '../../styles'
import {useAuth0} from 'react-native-auth0';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export const Purchases = () => {
  const dispatch = useDispatch()
  const userDb = useSelector(state => state.user)
  const {user} = useAuth0();

  useEffect(() => {
    dispatch(getUser(user.sub))
    /* console.log("user db de purche",userDb) */
  },[])

  // const purchases = userDb?.purchases.map(p => p.products)
  // console.log('log purcha', purchases)

  return (
    <View>
        <Text style={stylesCardProduct.title}>
            Purchases
        </Text>
        {/*<View>
          {purchases?.length ? (

            
            <View>
            </View>
          ) : (
            <View>
              <Text>No hay purchases</Text>
            </View>
          )
          }
        </View> */}
    </View>
  )
}
