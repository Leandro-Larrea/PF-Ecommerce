import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, setFilter } from '../../redux/actions';

export default function ({ categories }) {


  const dispatch = useDispatch();

  const [selected, setSelected] = useState('');
  const { filters } = useSelector(state => state);
  const [filterInput, setFilterInput] = useState({
    title: '',
    min: '',
    max: '',
    category: '',
  });

  const data = categories.map(e => {
    return {
      value: e.category,
    };
  });

  const handleChage = e => {
    setSelected(e);

    setFilterInput({
      ...filters,
      category: e,
    });
  };

  const handleFilter = () => {
    const { title, min, max, category } = filterInput
    dispatch(search(title, min, max, category));
    dispatch(setFilter(filterInput))

  };

  return (
    <View style={styles.containerPosition}>
      <View style={styles.container}>
        <SelectList
          onSelect={() => handleFilter()}
          placeholder="category"
          setSelected={e => handleChage(e)}
          data={data}
          save="value"
          search={false}
          boxStyles={{ borderRadius: 0,}}
          style={{color:"red"}}
          dropdownStyles={{borderRadius:10,backgroundColor:"#2d2d2d"}}
          dropdownTextStyles={{color:"white"}}
          maxHeight={1000}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPosition: {
    position: "relative", 
    zIndex: 2,
    width:130,
    
  },
  container:{
    zIndex:20,
    width:130,
    borderRadius:10,
    width:"100%",
    position:"absolute",
}
})
