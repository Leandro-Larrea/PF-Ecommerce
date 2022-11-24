import React ,{useEffect,useState}from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../SearchBar/SearchBar'



//--componentes---
import Cards from '../Cards/Cards.jsx'

export const LookProducts = () => {





  return (
   
     <View>
      <SearchBar/>
      <Cards/>
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