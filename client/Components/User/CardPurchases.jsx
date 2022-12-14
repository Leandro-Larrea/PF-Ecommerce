import React from 'react'
import { View, Image, Text } from 'react-native'

const CardPurchases = ({ title, productId, quantity, price }) => {
  return (
    <View>
        <View>
            <Text>{productId}</Text>
            <Text>{title}</Text>
            <Text>{quantity}</Text>
            <Text>{price}</Text>
        </View>
    </View>
  )
}

export default CardPurchases