import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import headphone from '../../images/headphones.png'
import joystick from '../../images/joystick.png'
import monitors from '../../images/monitor.png'
import chair from '../../images/chair.png'



export default function HomeCategories({categories,navigation}){

const images=[headphone,monitors,joystick,chair]
const data = categories.slice(5).map(e=> e.category)



const handlePress=()=>{
    navigation.navigate('Products')
    
}


  return (
    <View style={styles.container}>


    <View>
      {
        images.map(e=>{
          return(
            <View key={e} style={styles.imgContainer}>
            <Image style={styles.image} source={e}/>
            </View>
          )
        })
      }
    </View>
     <View>
      {
        data ? data.map(e=>{
          return (
          <TouchableOpacity key={e}  style={styles.button} onPress={()=>handlePress()}> 
            <Text style={styles.text}>{e}</Text>
          </TouchableOpacity>)
        })
        : <Text>cargando</Text>
      }
     </View>
    </View>
  );
}

//----estilos-------------

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    

  },

  image:{
    height:'70%',
    width:'70%'
  },
  imgContainer:{
    backgroundColor:'#2d2d2d',
    height:WIDTH*0.15,
    width:WIDTH*0.15,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5,
    borderRadius:32
     },
  button:{
    backgroundColor:'#2d2d2d',
    borderRadius:32,
    height:WIDTH*0.15,
    marginVertical:5,
    marginLeft:10,
    width:WIDTH*0.7,
    padding:20
  },
  text:{
    color:'white',
  
  }
});
