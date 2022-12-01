import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import CartList from "../Cart/CartList";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const Profile = () => {
    const {user} = useAuth0();

    return (
        <>
            <View style={styles.container}>
            {user ? (
                <View style={styles.boton}>
                    <Text>Logged in as {user.name}</Text>
                    <LogoutButton />
                </View>
            )
            : (
                <View>
                    <Text>Not logged in</Text>
                    <LoginButton />
                </View>
            )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
       
    },
    boton: {
        width: 100,
        height: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
})