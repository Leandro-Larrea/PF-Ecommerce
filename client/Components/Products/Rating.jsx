import { useState } from "react";
import { View,Text,StyleSheet, Pressable, TouchableOpacity } from "react-native";


export default function Rating({rating}){


    value = Math.ceil(rating.rating)  
   
    const [defaultRating,setdefaultRating]=useState(value)
    const [maxRating,setmaxRating] = useState([1,2,3,4,5])
   
    const starFilled ='★'
    const starBorder ='☆'
    
    const CustomRatingBar = ()=>{
        return (
            <View style={styles.starsMain}>
                {
                    maxRating.map((item,key)=>{
                        return (
                            <View key={key}>
                                <TouchableOpacity
                                
                                onPress={()=>setdefaultRating(item)}
                                >
                                  <Text style={styles.star}>{item<=defaultRating
                                         ? starFilled
                                         : starBorder
                                  }</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                   
                    )
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
         
          <CustomRatingBar/>
        <Text style={styles.votes}> {'('+rating.votes+' votes)'} </Text>
        </View>
    )
}





const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    starsMain:{
        flexDirection:'row',
    },
    votes:{
        color:'#2d2d2d',
        fontSize:13,
        marginTop:5
    },
    star:{
        fontSize:28,
        color:'#89c30d',
        letterSpacing:5
    }

   
})