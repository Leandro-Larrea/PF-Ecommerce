import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const Profile = () => {
    const {user} = useAuth0();
    //console.log(user)
    return (
        <>
            <View style={styles.container}>
            {user ? (
                <View style={styles.info}>
                <View>
                    <Text>Logged in as: {user.name}</Text>
                    <Text>Email: {user.email}</Text>
                    <Text>Nickname: {user.nickname}</Text>
                    <Image source={user.image} />
                </View>
                <View style={styles.boton}>
                    <LogoutButton />
                </View>
                </View>
            )
            : (
                <View>
                <View>
                    <Text>Not logged in. Please log in</Text>
                </View>
                <View style={styles.botonIn}>
                    <LoginButton />
                </View>
                </View>
            )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 20,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        
       
    },
    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    boton: {
        width: 100,
        height: 100,
        display: "flex",
        flexDirection: "column",
    },
    botonIn: {
        width: '100%',
        paddingTop: 15,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
})