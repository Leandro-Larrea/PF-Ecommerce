import React from "react";
import {Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import { color } from "@rneui/base";

export const LoginButton = () => {
    const {authorize} = useAuth0();

    const onPress = async () => {
        try {
            await authorize();
        } catch (e) {
            console.log(e);
        }
    };

    return <Button  color={'#89c30d'} onPress={onPress} title="Log in" />
}
