import { useEffect, useState } from 'react'
import { Text, View, StyleSheet ,Dimensions,Image,Modal,Pressable} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { clean, purchaseDetails } from '../../redux/actions'
import PurchaseDetail from './PurchaseDetails'
export default function PurchaseCard({data}){

    const dispatch = useDispatch()
   

    const [modalVisible, setModalVisible] = useState(false);


    const handleClose= ()=>{
        dispatch(clean())
        setModalVisible(!modalVisible)
    }
   


    return(
        <View key={data && data.userId} style={styles.container}>
         <Text style={styles.id}>ID:{data && data._id}</Text>
         
         <View style={styles.info}>
          <Text style={styles.items} >Items:{data.products && data.products.length}</Text>
         <Text style={styles.price} >Total: ${data && data.totalPrice}</Text>

         <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
            >
          <Text style={styles.textStyle}>Details</Text>
         </Pressable>
         </View>

         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PurchaseDetail id={data._id}/>

            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress={() => handleClose()}
            >
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
        </View>
    )
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderRadius:5,
    width:WIDTH* 0.9,
    height:HEIGHT*0.1,
    marginVertical:5,
    alignSelf:'center',
 
   
},
  imgCont:{
    height:80,
    width:'20%'
},
  img:{
     height:'100%'
},
   info:{
    flexDirection:'row',
    paddingTop:10,
    paddingLeft:10,
    justifyContent:'space-around'
   },
   id:{
    backgroundColor:'#89c30d',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    paddingLeft:10,
    paddingTop:5,
    fontFamily:'Louis George Cafe Bold',
    height:'40%',
  
   },
   items:{
    marginRight:40
   },
   button:{
    backgroundColor:'#2d2d2d',
    padding:5,
    borderRadius:5
   },
   button2:{
   backgroundColor:'#89c30d',
   width:WIDTH*0.9,
   height:40,
   alignSelf:'center',
   justifyContent:'center',
   alignItems:'center'
   },
   textStyle:{ 
    color:'white',
    fontFamily:'Louis George Cafe Bold'
   }
});
  