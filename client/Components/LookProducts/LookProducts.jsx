import React ,{useEffect,useState}from 'react'
import { View, Text, StyleSheet } from 'react-native'



//--componentes---
import Cards from '../Cards/Cards.jsx'

export const LookProducts = () => {





  return (
    <View>  
     <View><Text>search</Text></View>
     <View><Text>filters</Text></View>
     <Cards></Cards>
       
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: "red"
    },
    play:{
    
      height:'100%'
    }

})