import React from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'

export const NavBar = ({ navigation }) => {
  return (
    <View style={style.container}>
        <Button style={style.button} title='home'>    </Button >
        <Button style={style.button} title='buscar' ></Button>
        <Button style={style.button} title='carrito' ></Button>
        <Button style={style.button} title='asd'></Button>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#2d2d2d",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
 
})

