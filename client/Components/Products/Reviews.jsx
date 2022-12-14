import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  VirtualizedList,
  Alert,
} from 'react-native';
import {addReview, getProducts, getReviews} from '../../redux/actions';
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';


export default function Reviews({reviews, productId}) {
  
const dispatch = useDispatch();

const userData = useSelector(state=>state.user)
const purchases = userData && userData.purchases

const PurchasesProductsID = purchases && purchases.map(e=>{
  return e.products.map(e=>e.productId)
}).flat()

  const {user} = useAuth0();
  const [text, setText] = useState('');

  const [reviewData, setreviewData] = useState({
    userId: userData && userData.name + ' ' + userData.lastName,
    productId: productId,
    review: '',
  });

  const handleChange = e => {
    setText(e);
    setreviewData({
      ...reviewData,
      review: e,
    });
  };

  const handlePress = () => {
    if (reviewData.userId) {
      if(PurchasesProductsID.includes(productId)){
        if (reviewData.review == '') {
        return Alert.alert('oh!', 'The message is require', [
          {
            text: 'Ok',
            onPress: () => console.log('Ask me later pressed'),
          },
        ]);
      }
      dispatch(addReview(reviewData, productId));
      setreviewData({
        userId: userData && userData.name,
        productId: productId,
        review: '',
      })
      setText('');
    } else{
      Alert.alert('ups!', 'you cannot rate before buying the product',
       [
        {
          text: 'Ok',
          onPress: () => console.log('Ask me later pressed'),
        },
      ]);
    }
    } else {
      Alert.alert('wait!', 'You have to log in', [
        {
          text: 'Ok',
          onPress: () => console.log('Ask me later pressed'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer reviews</Text>
      <View style={styles.separator} />

      {reviews.reviews ? (
        reviews.reviews.map(e => {

          return (
            <View style={styles.commentBox} key={e._id}>
              <Text style={styles.name}>by: {e.user}</Text>
              <Text>{e.review}</Text>
            </View>
          );
        })
      ) : (
        <Text style={styles.noRev}>
          There aren't any reviews for this product yet!
        </Text>
      )}
      <View style={styles.separator} />

      <View>
        <Text style={styles.addText}>Add a review:</Text>
        <TextInput
          placeholder="your message..."
          placeholderTextColor={'#828282'}
          style={styles.input}
          value={text}
          onChangeText={e => handleChange(e)}
        />
        <View style={styles.buttonBox}>
          <Button
            onPress={() => handlePress()}
            title="send"
            color={'#89c30d'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Louis George Cafe Bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  separator: {
    marginVertical: 8,
    width: '100%',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  commentBox: {
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  noRev: {
    fontFamily: 'Louis George Cafe Bold',
    textAlign: 'center',
  },
  addText: {
    fontSize: 15,
    fontFamily: 'Louis George Cafe Bold',
    marginVertical: 5,
  },
  input: {
    fontFamily: 'Louis George Cafe Bold',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c1c1c1',
    paddingHorizontal: 10,
  },
  buttonBox: {
    width: '40%',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
});
