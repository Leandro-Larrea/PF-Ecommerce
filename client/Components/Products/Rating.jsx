import { useState } from "react";
import { View,Text,StyleSheet, Pressable, TouchableOpacity,Alert } from "react-native";
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';
import { addRating } from "../../redux/actions";

export default function Rating({rating,productId}){


    
    const votes = rating.votedFor && rating.votedFor.length 
    const value = Math.round(rating.rating/votes)

    const {user} = useAuth0();
    const dispatch = useDispatch();

    const [defaultRating,setdefaultRating]=useState(value)
    const [maxRating,setmaxRating] = useState([1,2,3,4,5])
   
    const starFilled ='★'
    const starBorder ='☆'


    const handlePress = (item)=>{
        const ratingData= {
            userId:user && user.sub,
            productId:productId,
            rating:item
         }
        if(user){
            setdefaultRating(item)
            dispatch(addRating(ratingData))
        } else {
            Alert.alert('wait!', 'You have to log in', [
                {
                  text: 'Ok',
                },
              ]);
        }
    }
    
    const CustomRatingBar = ()=>{
        return (
            <View style={styles.starsMain}>
                {
                    maxRating.map((item,key)=>{
                        return (
                            <View key={key}>
                                <TouchableOpacity
                                
                                onPress={()=>handlePress(item)}
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
        <Text style={styles.votes}> {'('+votes+' votes)'} </Text>
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