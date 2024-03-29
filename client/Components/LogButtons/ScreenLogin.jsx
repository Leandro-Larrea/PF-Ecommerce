import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LoginButton } from './LoginButton'
import Header from '../Home/Header'
import { useAuth0 } from 'react-native-auth0'
import { useState } from 'react'

const ScreenLogin = () => {

    const [loader, setLoader] = useState(false)

    const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  console.log(user)

    return (
    <View style={styles.containerLog}>
        <View style={styles.header}>
            <Header/>
        </View>
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.textoFont}>Please, log in with Auth0 to access profile information</Text>
            </View>
            <View style={styles.boton}>
                <LoginButton/>
            </View>
        </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
    containerLog: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
      },
    texto: {
        padding: 50,
        width: '90%'
    },
    textoFont: {
        fontSize: 22,
        fontFamily: 'Louis George Cafe',
        fontWeight: '900',
        textAlign: 'center',
    },
    boton: {
        width: '50%'
    },
    header: {
        backgroundColor: '#2d2d2d',
        width: '100%',
        height: 50,
        justifyContent: 'flex-start'
      },
})

export default ScreenLogin