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
  fixToTextDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixToTextButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fixToTextPrice: {
  textAlign: 'center',
  alignItems: 'center',
  marginLeft: 10
  },
  price: {
    marginVertical: 8,
    fontWeight: "900",
    fontSize: 15,
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
    marginVertical: 8,
    fontWeight: 'bold',
  },
  description: {marginBottom: 10},
});
