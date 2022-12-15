import { View ,Text,Dimensions,StyleSheet,Image} from "react-native";
import { purchaseDetails } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ScrollView } from "react-native-gesture-handler";


export default function PurchaseDetail({id}){

    
    const dispatch = useDispatch()
    const details = useSelector(state=>state.purchaseDetail)

   
    useEffect(()=>{
        if(id){dispatch(purchaseDetails(id))}
    },[])
    
    return (
        <ScrollView style={styles.container}>
            <View>
                {
                    details.products && details.products.map(e=>{
                        return(
                            <View style={styles.info} >
                                <Text style={styles.title} numberOfLines={3}>{e.title}</Text>
                                <Image style={styles.img} source={{uri:e.image}}/>
                                <Text style={styles.price}>${e.price}</Text>
                            </View>
                        )
                    })
                }
            </View>
             <Text style={styles.totalPrice}>US${details && details.totalPrice}</Text>
        </ScrollView>
    )
}


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
 container:{
    width:WIDTH*0.9,
    height:HEIGHT*0.75,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:60,
    padding:20
 },
 img:{
    height:80,
    width:80
},
info:{
    flexDirection:'row',
    justifyContent:'space-around',
    borderStartWidth:1,
    
    marginVertical:10
},
title:{
    width:'50%',
    fontFamily:'Louis George Cafe Bold'
},
price:{
  marginTop:20
},
totalPrice:{
    alignSelf:'flex-end',
    backgroundColor:'#2d2d2d',
    color:'#89c30d',
    fontWeight:'bold',
    width:'100%',
    textAlign:'right',
    padding:10
}
});
  