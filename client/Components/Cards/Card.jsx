import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Card({ image, title, price }) {
  return (
    <View style={style.container}>
        <View>
            <Image
                style={style.img}
                source={{
                    uri:{image}
                }}
            />
        </View>
        <View>
            <View style={style.title} >
                <Text>'Title'</Text>
                <Text>{title}</Text>
            </View>
            <View style={style.price}>
            <Text>Price</Text>
                <Text>{price}</Text>
            </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        height: 140,
        width: 380,
    },
    img: {
        backgroundColor: 'red',
        height: 100,
        weight: 120,
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 20
    }
})

export default Card