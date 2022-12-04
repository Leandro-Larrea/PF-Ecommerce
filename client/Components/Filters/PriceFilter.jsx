import { View, TextInput, Button,StyleSheet,Text, Alert } from "react-native";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { search,setFilter } from "../../redux/actions";
import { useEffect } from "react";




export default function PriceFilter (){

const dispatch = useDispatch() 

const {filters} = useSelector(state => state);
const [filterInput, setFilterInput] = useState({
...filters
});

useEffect(()=>{
  console.log(filters, filterInput)
  if(filters.category !== filterInput.category){
    setFilterInput({...filterInput,category : filters.category})
  }
},[filters])

const [min, setMin] = useState("");
const [max, setMax] = useState("");


const handleMin =(e)=>{
   setMin(e)
   setFilterInput({
    ...filterInput,
    min: e
  })

}
const handleMax =(e)=>{
  setMax(e)
  setFilterInput({
    ...filterInput,
    max: e,
  })

}

const handlePress = ()=>{
  const {title, min, max, category} =filterInput
  console.log("press", title, min, max, category)
if(parseInt(min) > parseInt(max)){
   Alert.alert(
    "ups!",
    "The minimum value cannot be greater than the maximum",
    [
      {
        text: "Ok",
        onPress: () => console.log("Ask me later pressed")
      },
    
    ]
  );
     setMin('')
   setMax('')
  } else{
    dispatch(search(title, min, max, category));
    
   setFilterInput({
     ...filters,
     min: '',
     max: '',
    
   });
   dispatch(setFilter({...filters,
    min: '',
    max: '', }))
    setMin('')
    setMax('') 
 }
}


    return (
        <View style={styles.container}>
            <Text >PRICE RANGE:</Text>
             <View style={styles.inputs}>
              <TextInput
               placeholder="min"
               style={styles.input1}
               onChangeText={(e)=>handleMin(e)}
               value={min}
               keyboardType="numeric"
              />
              <TextInput
               placeholder="max"
               style={styles.input2}
               onChangeText={(e)=>handleMax(e)}
               value={max}
               keyboardType="numeric"
              />
              </View>
              <Button color={'#df5a00'}  title={'>'} onPress={()=>handlePress()}/>
             
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-around',
        alignItems:'center',
        
      },
    inputs:{
       flexDirection:'row',
       justifyContent:'space-around',
       width:140
       },
    input1:{
        height: 40,
        width:60,
        borderWidth: 1,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5,
        borderColor:'#939ba6',
        paddingHorizontal:10,
        color:'#df5a00'
    },
     
    input2:{
      height: 40,
      width:60,
      borderWidth: 1,
      borderBottomRightRadius:5,
      borderTopRightRadius:5,
      borderColor:'#939ba6',
      paddingHorizontal:10,
      color:'#df5a00'
    }
  });