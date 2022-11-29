import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getProducts} from '../../redux/actions';


//------componentes-----
import Select from '../Filters/Select';
import ShowAll from '../Filters/ShowAll';
import Sort from '../Filters/Sort';
import {SearchBar} from '../SearchBar/SearchBar';
import CardProduct from './CardProduct';






export default function Cards({navigation}) {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.products);
  const {products} = useSelector(state => state.products);



  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, []);
  useEffect(() => {
    async function ejet() {
      if (!products) {
        await dispatch(getProducts());
      } /* else {
        console.log('cards', products?.[0]);
      } */
    }
    ejet();
  }, [products]);
  function navegar(product) {
    navigation.navigate('Detail', product);
  }

  return (

    <View style={styles.main}>
      <SearchBar />
      
      <View style={styles.showAll}>
      <ShowAll/>
      </View>

     <View style={styles.filterContainer}>
  
        {categories ? (
          <Select categories={categories}></Select>
        ) : (
          <Text>no se renderizo</Text>
        )}
   
      <Sort/>
      </View>
      {products && (
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <>
              <CardProduct
                navegar={navegar}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                key={item._id}
              />
              {}
              {products.length - 1 === index && (
                <View style={{height: 300}}></View>
              )}
            </>
          )}
        />
      )}
    </View>
  );
}




const styles = StyleSheet.create({
 main:{
  backgroundColor:'2d2d2d'
 },
  filterContainer: {
    
    flex:1,
    flexDirection:'row',
    minHeight:80,
    zIndex:1,
    marginTop:10
    },
  
  showAll:{
    padding:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
}
);