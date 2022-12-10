import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {cleanFilter, search, setFilter} from '../../redux/actions';
import {useAuth0} from 'react-native-auth0';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchBar = ({navigation, filters, fcUpdate}) => {
  const {user} = useAuth0();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // const [filterInput, setFilterInput] = useState({
  //   ...filters,
  //   title: '',
  // });

  // const {filters} = useSelector(state => state);

  // useEffect(() => {
  //   if (filters.category !== filterInput.category) {
  //     setFilterInput({...filterInput, category: filters.category});
  //   }
  // }, [filters]);

  const handleTextChange = name => {
    // setFilterInput({
    //   ...filters,
    //   title: name,
    // });
    // setName(name);
   fcUpdate("title", name)
  };

  const handleSearch = e => {
    //dispatch(search(title,min));
    // let title = filterInput.title;
    // let min = filterInput.min;
    // let max = filterInput.max;
    // let category = filterInput.category;
    // dispatch(setFilter({...filters, title: ''}));
    // dispatch(search(title, min, max, category));
    // setFilterInput({
    //   ...filters,
    //   title: '',
    // });
    // setName('');
    dispatch(search(filters.title, filters.min, filters.max, filters.category))
    fcUpdate("title", "")
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={style.main}>
      <TextInput
        placeholder="Search..."
        value={filters.title}
        onChangeText={e => handleTextChange(e)}
        style={style.Input}
      />
      <View style={style.button}>
        <Button
          title="SEARCH"
          color={'#89c30d'}
          onPress={e => handleSearch(e)}
          style={style.Button}></Button>
      </View>
      <View style={style.botonCuenta}>
        {loggedIn ? (
          <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
            <Icon size={28} name="person-outline" color="#6A37C4" />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
            <Icon name="person-outline" size={28} color="#89c30d" />
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#2d2d2d',
    minHeight: 50,
    paddingLeft: 40,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Input: {
    backgroundColor: '#F5F5F5',

    paddingHorizontal: 10,
    fontFamily: 'Louis George Cafe Bold',
    height: 35,
    width: 200,
    borderRadius: 10,
  },

  botonCuenta: {
    marginLeft: 10,
    justifyContent: 'flex-end',
  },
});
