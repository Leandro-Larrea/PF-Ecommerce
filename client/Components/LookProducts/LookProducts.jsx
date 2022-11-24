import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../SearchBar/SearchBar'

export const LookProducts = () => {
  return (
    <View>
        <Text style={style.text} >Productos aca</Text>
        <SearchBar></SearchBar>
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: "red"
    }
})