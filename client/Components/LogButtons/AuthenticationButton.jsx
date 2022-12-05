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
      <View style={styles.text}>  
      {loggedIn && <Text style={styles.logtext} > {user.name}</Text>}
      {!loggedIn && <Text style={styles.text}>You are not logged in</Text>}
      </View>
      <View style={styles.boton}>
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
        style={styles.boton}
        color={'#89c30d'}
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

        
    },
    text:{
      color:'white',
      fontSize:18,
      marginRight:5,
      fontFamily:'Louis George Cafe Bold'
    },
    logtext:{
      color:'white',
      marginRight:5,
      fontFamily:'Louis George Cafe Bold'
    }
   
})

export default AuthenticationButton