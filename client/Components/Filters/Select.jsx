import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, setFilter } from '../../redux/actions';

export default function ({ categories, filters, fcUpdate }) {


  const dispatch = useDispatch();
  const todos = "";
  const [selected, setSelected] = useState('');
  //  const { filters } = useSelector(state => state);
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
    // setSelected(e);

    // setFilterInput({
    //   ...filters,
    //   category: e,
    // });
    if(e === "todos") e = ""
    fcUpdate("category", e) 
  };

  const handleFilter = () => {
    // const { title, min, max, category } = filterInput
    dispatch(search("", filters.min, filters.max, filters.category));
    // dispatch(setFilter(filterInput))

  };

  return (
    <View style={styles.containerPosition}>
      <View style={styles.container}>
        <SelectList
          onSelect={() => handleFilter()}
          placeholder="Category"
          setSelected={e => handleChage(e)}
          data={["todos",...data]}
          save="value"
          search={false}
          boxStyles={{ borderRadius: 9, backgroundColor: "#f5f5f9", height: 44}}
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
    width:145,
    height:50,   
  },
  container:{
    zIndex:20,
    width:145,
    borderRadius:10,
    width:"100%",
    position:"absolute",
}
})
