import {StyleSheet} from 'react-native';

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
    position:"relative",
    zIndex:1,
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
    width: '100%',
    height: 250,
  },
  fixToText: {
    width:140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'flex-end'
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
    color:'#2d2d2d',
    fontSize:15,
    fontFamily:'Louis George Cafe Bold',
    fontWeight: 'bold',
    textAlign:'center'
  },
  description: {
    marginBottom: 10,
    fontFamily:'Louis George Cafe Bold',
  },
  price:{
    position:"absolute",
    margin: 10,
    fontSize: 18,
    fontFamily:'Louis George Cafe Bold',
    backgroundColor:'#2d2d2d',
    color: "#89c30d",
    bottom:0,
    padding:6,
    borderRadius:6,
  
  }
});
