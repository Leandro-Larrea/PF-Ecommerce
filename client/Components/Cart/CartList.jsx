import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartList = () => {
  return (
    <View style={styles.container}>
      <Text>CartList</Text>
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
    container: {
        height: '70%',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: 'red',
       
    }
})