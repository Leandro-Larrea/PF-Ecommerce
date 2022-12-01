import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const CardProduct = ({navegar, title, image, description, price}) => {
  const {user} = useAuth0();
  function handleAddCart() {
    if (user) return alert('permitido')
    return alert('permitido');
  }
  

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
      <View style={styles.buttonMain}>
      <View style={styles.fixToText}>
        <Button
          color="#df5a00"
          title={'VIEW'}
          onPress={() => {
            navegar({title, image, description, price});
          }}></Button>

        <Button title={'ADD CART'} color="#89c30d" onPress={handleAddCart}>
          <Icon size={20} name="cart-plus" color="#fff" />
        </Button>
      </View>
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
  buttonMain:{
    flexDirection: 'row',
    justifyContent:'flex-end'
  },

  fixToText: {
    width:140,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
