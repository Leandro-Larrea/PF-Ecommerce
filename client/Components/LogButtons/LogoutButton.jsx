import React from "react";
import {Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';

export const LogoutButton = () => {
    const {clearSession} = useAuth0();

    const onPress = async () => {
        try {
            await clearSession();
        } catch (e) {
        }
    };

    return <Button onPress={onPress} title="Log out" color={'#FF6C6A'}/>
}