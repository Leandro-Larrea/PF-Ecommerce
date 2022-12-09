import {StyleSheet,Dimensions} from 'react-native';

export const stylesCardCart = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: '2%',
    padding: '2%',
    borderRadius: 7,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.75,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    // width: '',
    // marginVertical: 8,
    // marginHorizontal: 5,
    fontWeight: 'bold',
  },
  containerBttnsCart: {
    position: 'relative',
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
  },
});
export const stylesCardProduct = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: '2%',
    padding: '2%',
    borderRadius: 7,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.75,
    elevation: 3,
    flex: 1,
  },
  image: {
    // width: '100%',
    height: 250,
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: '#2d2d2d',
    fontSize: 15,
    fontFamily: 'Louis George Cafe Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginBottom: 10,
    fontFamily: 'Louis George Cafe Bold',
  },
  price: {
    // position: 'absolute',
    // margin: 10,
    fontSize: 18,
    fontFamily: 'Louis George Cafe Bold',
    backgroundColor: '#2d2d2d',
    color: '#89c30d',
    bottom: 0,
    padding: 6,
    borderRadius: 4,
  },
  cart: {
    fontSize: 14,
    fontFamily: 'Louis George Cafe Bold',
    backgroundColor: 'white',
    color: '#89c30d',
    margin: 3,
    // padding: 4,
    borderRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.75,
    elevation: 3,

    alignItems: 'center',
    justifyContent: 'center',
  },
});


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

export const stylesDetails = StyleSheet.create({
  container:{
    height: '100%',
    padding:20,
    backgroundColor:'#2d2d2d',
    flex:1,
  },
  productCard:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image:{
    width:WIDTH*0.8,
    height:HEIGHT*0.25,
    alignSelf:'center',
    margin:10
  },
  title:{
    fontFamily:'Louis George Cafe Bold',
    fontSize:18,
    textAlign:'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  description:{
    fontFamily:'Louis George Cafe Bold',
    marginHorizontal:10
  },

    data:{
      fontFamily:'Louis George Cafe Bold',
      backgroundColor:'#2d2d2d',
      color: "#89c30d",
      bottom:0,
      padding:6,
      borderRadius:6,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:25,
      
    },
    price:{
      fontSize:20,
      color:'#89c30d'
    },
    stock:{
      color:'#89c30d'
    },
    fixToText:{
      marginTop:10
    },
    reviews:{
      marginVertical:20,
      backgroundColor:'white',
      padding:10,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width:'100%'
    }
});