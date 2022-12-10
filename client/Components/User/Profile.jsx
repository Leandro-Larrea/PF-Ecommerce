import React from 'react';
import {useEffect} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../redux/actions';
import {LoginButton} from '../LogButtons/LoginButton';
import {LogoutButton} from '../LogButtons/LogoutButton';

export const Profile = ({navigation}) => {
  const {user} = useAuth0();

  const dispatch = useDispatch();
  const userDb = useSelector(state => state.user);
  useEffect(() => {
    if (user) dispatch(getUser(user.sub));
    console.log('esto es user db', userDb);
    if (!userDb) {
      setTimeout(() => {
        alert(
          'In order of be able of using the full aplication u need to setup your contact info',
        );
      }, 1000);
    }
  }, []);

  // useEffect(() => {
  //   if (!userDb) {
  //     setTimeout(() => {
  //       alert(
  //         'In order of be able of using the full aplication u need to setup your contact info',
  //       );
  //     }, 1000);
  //   }
  // }, [userDb]);

  //console.log(user);

  return (
    <>
      <View style={styles.container}>
        {userDb ? (
          <View style={styles.info}>
            <View style={styles.buttons}>
              
              <Image style={{width: 150, height: 150}} source={userDb.image} />
              <Text style={styles.data}>Name: {userDb.name}</Text>
              <Text style={styles.data}>Email: {userDb.mail}</Text>
              <Text style={styles.data}>Phone: {userDb.phone}</Text>
              <Text style={styles.data}>
                City: {userDb.location.city}, {userDb.location.country}
              </Text>
              <Text style={styles.title}></Text>
            </View>
            <View style={styles.boton}>
              <LogoutButton />
            </View>
          </View>
        ) : (
          <View style={styles.containerLog}>
            <Text style={styles.title}>Please complete your profile information</Text>
            <View style={styles.bottonIn}>
              <Button color={'#89c30d'} style={styles.botonGo} title='Go to complete information' onPress={()=> navigation.navigate('Edit data') }></Button>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    marginBottom: 20,
  },
  containerLog: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 120,
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60%',
  },
  title: {
    fontSize: 25,
  },
  warning: {
    fontSize: 25,
    color: 'red',
  },
  data: {
    fontSize: 20,
    lineHeight: 40,
  },
  info: {
    width: '100%',

    fontSize: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boton: {
    marginTop: 20,
    height: 100,
  },
  bottonIn: {
    width: 250,
    borderRadius: 30,
    paddingTop: 20,
  },
  botonGo: {
    borderRadius: 30,
  }
});
