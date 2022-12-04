import { useState } from "react";
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar, Dimensions,Image } from "react-native";

const images = [
    'https://s.zst.com.br/cms-assets/2021/01/pc-gamer-capa.jpg',
    'https://cwsmgmt.corsair.com/hybris/tlc/systems/gaming-pcs-banner_ICUE-CERTIFIED.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmoUwhPPRz3Toj169B0X2kNK2W5bwZuOQDw&usqp=CAU'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

export default function Carousel (){

const [imgActive,setimgActive]=useState(0)

onchange=(nativeEvent)=>{
    if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
       if(slide != imgActive){
        setimgActive(slide)

       }
    }
}
    return(
        <SafeAreaView style = {styles.container}>
         <View style={styles.wrap}>
           <ScrollView
              onScroll={({nativeEvent})=>onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
           >
            {

                images.map((e,index)=>
                <Image
                   key={e}
                   resizeMode='stretch'
                   style={styles.wrap}
                   source={{uri:e}}

                />
                )
            }

           </ScrollView>
           <View style={styles.wrapDot}>
            {
                images.map((e,index)=>
                <Text
                  key={e}
                  style={imgActive==index?styles.dotActive:styles.dot}
                >
                  ⦿
                </Text>
                )
            }
    
           </View>

         </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrap:{
        width:WIDTH,
        height:HEIGHT*0.25
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:'white'
    },
    dot:{
        margin:3,
        color:'#89c30d'
    }
})