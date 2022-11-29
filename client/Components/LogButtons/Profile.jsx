import React from "react";
import {Text} from 'react-native';
import {useAuth0} from 'react-native-auth0';

export const Profile = () => {
    const {user} = useAuth0();

    return (
        <>
            {user && <Text>Logged in as {user.name}</Text>}
            {!user && <Text>Not logged in</Text>}
        </>
    )
}