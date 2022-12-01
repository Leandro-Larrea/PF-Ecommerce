import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Profile } from '../LogButtons/Profile'
import {useAuth0} from 'react-native-auth0';
import CartList from './CartList';


export const Cart = () => {
  const {user} = useAuth0()
  const loggedIn = user !== undefined && user !== null;
  return (
    <View>
        <Profile/>
        {loggedIn && 
        <>
          <CartList/>        
        </>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});


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
