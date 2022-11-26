import { View,Text,Image,StyleSheet } from "react-native";
import image from './images/logo.png'
export default function (){




    return(
        <View style={styles.container}>
              <Image style={styles.image} source={image}/>
        </View>
    )
}



const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},

   image:{
      height:20,
      width:250,
          
   }
  });