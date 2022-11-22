import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { NavBar } from '../NavBar/NavBar'

export const Landing = ({ navigation }) => {
    return (
        <SafeAreaView style={style.container} >
            <View style={style.header} >
                <Text style={style.headerText}>"X MARKET"</Text>
                
            </View>
            <View style={style.content}>
                <View style={style.ofertaBox}>
                    <Text>OFERTAS 🔥</Text>
                </View>
                <View style={style.categoriaBox} >
                    <Text>Categorias Sugeridas</Text>
                </View>
            </View>
            <NavBar/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 10,
        padding: 5
    },
    header: {
        flex: 1,
        backgroundColor: "#6A37C4",
        paddingTop: 15,
        paddingBottom: 15
    },
    headerText: {
        textAlign: "center"
    },
    ofertaBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        margin: 30,
        backgroundColor: "#6A37C4"
    },
    categoriaBox: {
        marginTop: -10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flex: 2,
        borderWidth: 1,
        borderColor: "black"
    }
})
