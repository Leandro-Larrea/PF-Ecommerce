import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { LoginButton } from '../LogButtons/LoginButton'
import { LogoutButton } from '../LogButtons/LogoutButton'
import { Profile } from '../LogButtons/Profile'

export const Cart = () => {
  return (
    <View>
        <Text>Carrito de Compras</Text>
        <Profile/>
        <LoginButton/>
        <LogoutButton/>
    </View>
  )
}

// import {useAuth0 } from 'react-native-auth0';

// export const Cart = () => {
//   const {authorize, clearSession, user} = useAuth0();

//   const onLogin = async () => {
//     try {
//       await authorize({scope: 'openid profile email'});
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const onLogout = async () => {
//     try {
//       await clearSession();
//     } catch (e) {
//       console.log('Log out cancelled');
//     }
//   };

//   const loggedIn = user !== undefined && user !== null;

//   return (
//     <View style={styles.container}>
//       {loggedIn && <Text>You are logged in as {user.name}</Text>}
//       {!loggedIn && <Text>You are not logged in</Text>}

//       <Button
//         onPress={loggedIn ? onLogout : onLogin}
//         title={loggedIn ? 'Log Out' : 'Log In'}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
