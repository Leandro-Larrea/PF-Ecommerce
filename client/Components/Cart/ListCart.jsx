import React, {useContext} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {CartContext} from './ShoppingCart';
import CardCart from './CardCart';

const ListCart = ({navigation}) => {
  const {cartItems, resetCart, addItemToCart, deleteItemToCart} =
    useContext(CartContext);

  function navegar(product) {
    navigation.navigate('DetailProduct', product);
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.2}}>
        <Button title="Reset" onPress={resetCart} />
        <Text>Carrito de Compras: {cartItems?.length} </Text>
      </View>
      <View style={{backgroundColor: 'black', flex: 10}}>
        {!!cartItems?.length && (
          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <CardCart navegar={navegar} productInCart={item} />
            )}
          />
        )}
      </View>
      <View style={{flex: 0.8}}>
        <Button color="green" title="PAY NOW" onPress={() => navigation.navigate('Pay')} />
      </View>
    </View>
  );
};
export default ListCart;
