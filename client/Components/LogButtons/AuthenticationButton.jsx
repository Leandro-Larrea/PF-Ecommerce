// import React from 'react'
// import { View } from 'react-native';
// import {useAuth0} from 'react-native-auth0';
// import { LoginButton} from './LoginButton'
// import { LogoutButton } from './LogoutButton';
 

// const AuthenticationButton = () => {
//   const {user} = useAuth0()
  
//   return (
//     <>
//         {user ? (
//             <View>
//                 <LogoutButton />
//             </View>
//         )
//         : (
//             <View>
//                 <LoginButton />
//             </View>
//         )}
//     </>
//     )
// }

import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const AuthenticationButton = () => {
  const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      <View>  
      {loggedIn && <Text>Logged in as: {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      </View>
      <View style={styles.boton}>
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
        style={styles.boton}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    boton: {
      marginLeft: 10,
      height: 30,
      alignItems: 'center',
      textAlign: 'center',
    }
})

export default AuthenticationButton