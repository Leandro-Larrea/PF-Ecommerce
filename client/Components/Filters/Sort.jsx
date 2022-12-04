import { View, Text, StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sortByPrice } from "../../redux/actions";



export default function Sort() {

    const dispatch = useDispatch()
    const [selected, setSelected] = useState('')

    const data = ['min-max', 'max-min']



    const handleSort = () => {
        dispatch(sortByPrice(selected))
    }
    return (
        <View style={styles.containerPosition}>
            <View style={styles.container}>
                <SelectList
                    label="price"
                    style={styles.select}
                    onSelect={() => handleSort()}
                    placeholder='Sort by price'
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    search={false}
                    boxStyles={{ borderRadius: 0,}}
                    dropdownStyles={{borderRadius:10,backgroundColor:"#2d2d2d"}}
                    dropdownTextStyles={{color:"white"}}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    containerPosition: {
        position: "relative",
        zIndex: 1,   
        width:145,
    },
    container:{
        width:145,
        zIndex: 10,
        position:"absolute",    
    }

}
);