import React, { useEffect } from "react";
import { View,Text } from "react-native";
import {SelectList} from 'react-native-dropdown-select-list'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategories } from "../../redux/actions";


export default function({categories}){

const dispatch = useDispatch()

const [selected,setSelected]= useState('')

const data = categories.map(e=>{
    return {
        key:e.id,
        value:e.category
    }
})

const handleFilter=()=>{
   dispatch(filterByCategories(selected))

}

    return(
        <View style={{paddingHorizontal:20}}>
            <SelectList
            onSelect={()=>handleFilter()}
            placeholder='select category'
            setSelected={(val)=>setSelected(val)}
            data={data}
            save="value"
            search={false} 
            />
            
        </View>
    )
}