import React ,{useEffect,useState}from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'

//--componentes---
import Cards from '../Cards/Cards.jsx'
import Select from '../Filters/Select'


export const LookProducts = () => {
  
  const dispatch= useDispatch()
  const data= useSelector(state=>state.products)
  const categories = data.categories
  
 useEffect(()=>{
     if(!categories.length){
      dispatch(actions.getCategories())
     }
    
 },[])

  return (
   
     <View>
      <SearchBar/>
      <View>
        {
          categories ?
          <Select categories={categories}></Select>
         :<Text>no se renderizo</Text>
        }
      </View>
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