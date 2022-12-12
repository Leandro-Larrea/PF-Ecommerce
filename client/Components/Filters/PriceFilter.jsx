import {View, TextInput, Button, StyleSheet, Text, Alert} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {search, setFilter} from '../../redux/actions';
import {useEffect} from 'react';

export default function PriceFilter({filters, fcUpdate}) {
  const dispatch = useDispatch();

 

  const handleMin = e => {
    fcUpdate("min", e)
  };
  const handleMax = e => { 
    fcUpdate("max", e)
  };

  

  return (
    <View style={styles.container}>
      <Text style={{ color: "#2d2d2d", fontSize: 15, textDecorationColor: "red", textShadowColor: "grey", textShadowRadius: 10 }} >PRICE RANGE:</Text>
      <View style={styles.inputs}>
        <TextInput
        
          placeholder="$Min"
          style={styles.input1}
          onChangeText={e => handleMin(e)}
          value={filters.min}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="$Max"
          style={styles.input2}
          onChangeText={e => handleMax(e)}
          value={filters.max}
          keyboardType="numeric"
        />
      </View>
      {/* <Button color={'#df5a00'} title={'>'} onPress={() => handlePress()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 140,
  },
  input1: {
    height: 40,
    width: 60,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: '#939ba6',
    paddingHorizontal: 10,
    color: '#df5a00',
    backgroundColor: "#f5f5f9"
  },

  input2: {
    height: 40,
    width: 60,
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderColor: '#939ba6',
    paddingHorizontal: 10,
    color: '#df5a00',
    backgroundColor: "#f5f5f9"

  },
});
