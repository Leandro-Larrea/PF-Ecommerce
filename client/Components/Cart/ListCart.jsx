import React, {useContext} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {CartContext} from './ShoppingCart';
import CardCart from './CardCart';

const ListCart = ({navigation}) => {
  console.log(navigation);
  const {cartItems, resetCart, addItemToCart, deleteItemToCart} =
    useContext(CartContext);

  function navegar(product) {
    navigation.navigate('DetailProduct', product);
  }
  return (
    <View>
      <Button title="Reset" onPress={resetCart} />
      <Text>Carrito de Compras: {cartItems?.length} </Text>
      <View>
        {!!cartItems?.length && (
          <FlatList
            data={cartItems}
            renderItem={({item, index}) => (
              <>
                <CardCart navegar={navegar} productInCart={item} />
                {cartItems.length - 1 === index && (
                  <View style={{height: 200}}></View>
                )}
              </>
            )}
          />
        )}
      </View>
      <Button title="PAY NOW" />
    </View>
  );
};
export default ListCart;
