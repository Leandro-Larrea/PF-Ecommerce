import React from 'react';
import {Button, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useAuth0} from 'react-native-auth0';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

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
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      <View style={styles.text}>  
      {loggedIn && <Text style={styles.logtext} > {user.name}</Text>}
      {!loggedIn && <Text style={styles.text}>You are not logged in</Text>}
      </View>
      <View >
        <TouchableHighlight
          onPress={loggedIn ? onLogout : onLogin}
          //title={loggedIn ? 'Log Out' : 'Log In'}
          style={styles.boton}
          color={'#89c30d'}
        >
          <Icon
                  size={28}
                  name={loggedIn ? 'log-out-outline' : 'log-in-outline'}
                  color={loggedIn ? '#FF4544' : '#65AE77'}
                />
          
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
    },
    text:{
      color:'#f5f5f5',
      fontSize:17,
      marginRight:5,
      fontFamily:'Louis George Cafe',
      fontWeight: '100'
    },
    logtext:{
      color:'#f5f5f5',
      fontSize:17,
      marginRight:5,
      fontFamily:'Louis George Cafe Bold'
    },
    boton: {
      height: 28,
      marginLeft: 1,
    }
   
})

export default AuthenticationButton