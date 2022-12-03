import { Button, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { getProducts,setFilter } from "../../redux/actions";

export default function ShowAll(){

const dispatch = useDispatch()

const handlePress= ()=>{
  dispatch(getProducts())
  setFilter({
    title: '',
    min: '',
    max: '',
    category: '',
  })

}
    return(
        <View style={styles.container}>
            <Button color={'#df5a00'} title="Show all" onPress={e=>handlePress()}/>
        </View>
    )
}



//-----estilos-----------

const styles = StyleSheet.create({
     container:{
        width:100
     }   
}
);