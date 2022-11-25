
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {search} from '../../redux/actions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleTextChange = name => {
    setName(name);
  };

  const handleSearch = e => {
    dispatch(search(name));
    setName('');
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={name}
        onChangeText={e => handleTextChange(e)}
        style={style.Input}
      />
      <Pressable onPress={e => handleSearch(e)} style={style.Button}>
        <Text>🔍</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  Input: {
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    borderRadius: 10,
  },
  Button: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    position: 'relative',
    left: 350,
    top: -45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
