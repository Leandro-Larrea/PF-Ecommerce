import React from 'react';
import {View, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterByCategories, search} from '../../redux/actions';

export default function ({categories}) {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('');
  const {filters} = useSelector(state => state);
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
    let title = filterInput.title;
    let min = filterInput.min;
    let max = filterInput.max;
    let category = filterInput.category;
    dispatch(search(title, min, max, category));
    setFilterInput({
      title: '',
      min: '',
      max: '',
      category: '',
    });
  };

  return (
    <View style={{paddingHorizontal: 20}}>
      <SelectList
        onSelect={() => handleFilter()}
        placeholder="select category"
        setSelected={e => handleChage(e)}
        data={data}
        save="value"
        search={false}
        boxStyles={{borderRadius: 0}}
        dropdownStyles={{backgroundColor: '#efefef'}}
      />
    </View>
  );
}
