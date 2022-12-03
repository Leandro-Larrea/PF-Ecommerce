import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {search, setFilter} from '../../redux/actions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [filterInput, setFilterInput] = useState({
    title: '',
    min: '',
    max: '',
    category: '',
  });

  const {filters} = useSelector(state => state);

  const handleTextChange = name => {
    setFilterInput({
      ...filters,
      title: name,
    });
    setName(name);
  };

  const handleSearch = e => {
    //dispatch(search(title,min));
    let title = filterInput.title;
    let min = filterInput.min;
    let max = filterInput.max;
    let category = filterInput.category;
    setName('');
    dispatch(setFilter(filterInput));
    dispatch(search(title, min, max, category));
    setFilterInput({
      title: '',
      min: '',
      max: '',
      category: '',
    });
  };

  return (
    <View style={style.main}>
      <TextInput
        placeholder="Search..."
        value={name}
        onChangeText={e => handleTextChange(e)}
        style={style.Input}
      />
      <View style={style.button}>
        <Button
          title="SEARCH"
          color={'#df5a00'}
          onPress={e => handleSearch(e)}
          style={style.Button}></Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#2d2d2d',
    minHeight: 50,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Input: {
    backgroundColor: '#F5F5F5',

    paddingHorizontal: 10,

    height: 35,
    width: 200,
    borderRadius: 10,
  },

  button: {},
});
