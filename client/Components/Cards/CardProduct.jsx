import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CardProduct = ({navegar, title, image, description, price}) => {
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
      {/* <Text style={styles.description} numberOfLines={5}>
        {description}
      </Text> */}
      <View style={styles.fixToText}>
        <Button title={'VIEW'}></Button>

        <Button title={'ADD CART'} color="#65AE77" style={{margin: 10}}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: '2%',
    padding: '2%',
    borderRadius: 7,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.75,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  description: {marginBottom: 10},
});
export default CardProduct;
