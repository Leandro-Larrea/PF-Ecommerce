import React, { useEffect } from "react";
import { View,Text } from "react-native";
import {SelectList} from 'react-native-dropdown-select-list'
import { useState } from "react";


export default function({categories}){

const [selected,setSelected]= useState('')

const data = categories.map(e=>{
    return {
        key:e.id,
        value:e.category
    }
})


    return(
        <View style={{paddingHorizontal:20}}>
            <SelectList
            placeholder='select category'
            setSelected={(val)=>setSelected(val)}
            data={data}
            save="value"
            search={false} 
            />
            
        </View>
    )
}