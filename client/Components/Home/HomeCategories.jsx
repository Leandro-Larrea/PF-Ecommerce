import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';







export default function HomeCategories({categories,navigation}){


const data = categories.slice(4).map(e=>{

    return {
        id:e._id,
        title:e.category.toUpperCase()
    }
})



const handlePress=()=>{
    navigation.navigate('Products')
    
}
const Item = ({ title }) => (
    
    <TouchableOpacity 
    style={styles.item}
    activeOpacity={0.7}
    onPress={()=>handlePress()}
    >
        <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item, index}) => <Item key={index} title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, i) => i}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

//----estilos-------------

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 10,
  },

  item: {
    flex: 1,
    backgroundColor: '#df5a00',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    height: 110,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e6e6e6',
  },
});
