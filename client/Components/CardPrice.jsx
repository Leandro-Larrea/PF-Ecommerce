import {ActivityIndicator, View, Image, Animated} from 'react-native';

import {Button, Text} from '@rneui/themed';

const CardPrice = ({text = 'USD', price = 10, off = 10}) => {
  return (
    <View style={{flexDirection: 'row', position: 'relative'}}>
      <View
        style={{
          borderTopWidth: 30,
          borderRightWidth: 20,
          borderBottomWidth: 30,
          borderTopColor: 'transparent',
          borderRightColor: '#2d2d2d',
          borderBottomColor: 'transparent',
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          height: 10,
          width: 10,
          borderRadius: 50,
          bottom: '45%',
          left: '8%',
        }}></View>
      <View
        style={{
          position: 'relative',
          padding: 3,
          flexDirection: 'column',
          alignItems: 'center',
          // borderWidth: 1,
          borderColor: 'white',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: '#2d2d2d',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(173, 255, 47,1)',
            borderRadius: 5,
            paddingHorizontal: 4,
          }}>
          <Text
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: 14,
              color: '#2d2d2d',
            }}>
            {text}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
            textDecorationLine: 'line-through',
          }}>
          <Text style={{color: 'rgba(255,255,255,0.6)'}}>$</Text>
          {parseInt(price + price * (off / 100)).toFixed(2)}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'rgba(173, 255, 47,1)',
          }}>
          <Text style={{color: '#9BE42A', fontWeight: 'bold'}}>$</Text>
          {price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
export default CardPrice;
