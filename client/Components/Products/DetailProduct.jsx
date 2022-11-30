import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {stylesCardProduct} from '../../styles';

function DetailProduct({route}) {
  const {title, image, description, price} = route.params;
  return (
    <View style={styles.container} title={title}>
      <Image
        //   defaultSource={require('../../android/app/src/main/assets/')}
        /*  onProgress={(loaded, total) => {
        console.log(loaded);
      }} */
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
        source={{uri: image.toString()}}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.description} numberOfLines={5}>
        {description}
      </Text>
      <Text style={styles.title} numberOfLines={2}>
        {price}$
      </Text>
      <View style={styles.fixToText}>
        <Button title={'ADD CART'} color="#65AE77" style={{margin: 10}}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>
    </View>
  );
}
const styles = stylesCardProduct;
export default DetailProduct;
