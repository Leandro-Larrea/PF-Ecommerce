import React from 'react'
import { View } from 'react-native';
import {useAuth0} from 'react-native-auth0';
import { LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton';
 

const AuthenticationButton = () => {
  const {user} = useAuth0()
  
  return (
    <>
        {user ? (
            <View>
                <LogoutButton />
            </View>
        )
        : (
            <View>
                <LoginButton />
            </View>
        )}
    </>
    )
}

export default AuthenticationButton