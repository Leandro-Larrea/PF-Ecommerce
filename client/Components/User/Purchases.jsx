import React from 'react'
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPurchases, getUser } from "../../redux/actions";
import { Text, View,StyleSheet } from 'react-native'
import { stylesCardProduct } from '../../styles'
import {useAuth0} from 'react-native-auth0';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import PurchaseCard from './purchaseCard';

export const Purchases = () => {
  const dispatch = useDispatch()
  const userDb = useSelector(state => state.user)
  const {user} = useAuth0();
  const purchases = useSelector(state=>state.userPurchases)

  useEffect(() => {
    dispatch(getUser(user.sub))
    if(user) {dispatch(getPurchases(user.sub))}
    
  },[])
  // const purchases = userDb?.purchases.map(p => p.products)
  // console.log('log purcha', purchases)

  return (
    <ScrollView  style={styles.container} >

        {<View>
          {purchases && purchases.length ?
             purchases.map(e=>{
              return (
                <PurchaseCard data={e}/>
              )
             }
             )
          : (
            <View >
              <Text style={styles.noPurchases}>Without purchases</Text>
            </View>
          )
          }
        </View> }
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#2d2d2d',
    paddingTop:50,
  },
  noPurchases:{
    color:"white",
    fontSize: 20,
    textAlign:"center",
    backgroundColor:'#89c30d',
    margin: 10,
    padding:8,
    borderRadius:20

  }

});