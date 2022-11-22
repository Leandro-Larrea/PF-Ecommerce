import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Home = () => {
  return (
    <View>
        <Text style={style.text} >Home aca</Text>
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: "red"
    }
})