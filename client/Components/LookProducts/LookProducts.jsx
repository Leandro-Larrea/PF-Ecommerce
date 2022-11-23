import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const LookProducts = () => {
  return (
    <View>
        <Text style={style.text} >Productos aca</Text>
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: "red"
    }
})