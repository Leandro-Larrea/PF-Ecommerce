import React, { useEffect } from "react";

import { View, Text, StyleSheet } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../Redux/Actions'

/* import Card from "./Card"; */



export default function Cards(){

 const dispatch = useDispatch()

 const data = useSelector(state=>state.products)
 const products= data.products

 
useEffect(()=>{
    dispatch(actions.getProducts())

},[])

    return(
    <View>
        <Text>Cards</Text>

        {
            products.length ?
            products.map(e=>{
            return(
             {/* <Card title={e.title} image={e.image} price={e.price} key={e.title}></Card> */})
            })
            :<Text>no se esta renderizando</Text>
        }
    </View>
    )
}