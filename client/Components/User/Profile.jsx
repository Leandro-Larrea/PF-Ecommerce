import React, { useState } from 'react';
import {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser, getUser} from '../../redux/actions';
import {LogoutButton} from '../LogButtons/LogoutButton';
import {NotificationNoLog} from '../../src/services/LocalPushControllers';
import userImage from "../../images/carousel2.jpg";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export const Profile = ({navigation}) => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;

  console.log('USER Prof Aut', user);
  const userDb = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    
    async function getCurrentUser(){
      console.log("casad aca si ")
      setLoader(true)
        let a = await dispatch(getUser(user.sub));
      if (!a) {
        setTimeout(() => {
          alert(
            'In order of being able of using the full aplication u need to setup your contact info',
          );
        }, 1000);
        NotificationNoLog();
      }   
      setLoader(false)
    }
    if (user && !userDb) {
      getCurrentUser()
    }
    
    return () => {
      dispatch(clearUser());
    };
  }, [user]);

  console.log('usuarioDb', userDb);

if(loader || !user){ return <View style={styles.container}>
                                <Image source={require("../../images/loader.gif")}></Image>
                            </View>
}
else{
  return (
    <>
      <View style={styles.container}>
        {userDb === null || !Object.keys(userDb).length > 0 ? (
          <View style={styles.containerLog}>
            <Text style={styles.title}>
              Please complete your profile information
            </Text>
            <View style={styles.bottonIn}>
              <Button
                color={'#89c30d'}
                title="Go to complete information"
                onPress={() => navigation.navigate('Edit data')}></Button>
            </View>
            <View style={styles.botonGo}>
              <LogoutButton />
            </View>
          </View>
        ) : (
          <View style={styles.info}>
            <View style={{width: '100%', marginTop: -20}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  /* '#4c669f', '#3b5998', '#192f6a', */ '#63b360',
                  '#549651',
                  '#345c32',
                ]}
                style={{paddingTop: 70}}>
                <Image
                  style={{
                    width: 165,
                    height: 165,
                    borderWidth: 4,
                    borderRadius: 400 / 2,
                    borderColor: 'white',
                    marginBottom: 20,
                    alignSelf: 'center',
                    backgroundColor:"white"
                  }}
                  source={userDb.image? {uri: userDb.image}: require("../../images/profile-icon.png")}
                />

                <View style={styles.userName}>
                  <Text style={styles.name}>
                    {userDb.name + ' ' + userDb.lastName}
                  </Text>
                </View>
              </LinearGradient>
            </View>
            <View style={{marginTop: 10}}>
              <View>
                <View style={styles.userInfo}>
                  <Text style={styles.data}>
                    <Icon name="mail" size={22}></Icon> {userDb.mail}
                  </Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.data}>
                    <Icon name="call" size={22}></Icon> {userDb.phone}
                  </Text>
                </View>

                <View style={styles.userInfo}>
                  <Text style={styles.data}>
                    <Icon name="earth-sharp" size={22}></Icon>{' '}
                    {userDb.location.country}
                  </Text>
                </View>

                <View style={styles.userInfo}>
                  <Text style={styles.data}>
                    <Icon name="location-sharp" size={22}></Icon>{' '}
                    {userDb.location.city}
                  </Text>
                </View>
                
              </View>
            </View>
            <View style={styles.boton}>
              <LogoutButton />
            </View>
          </View>
        )}
      </View>
    </>
  );}
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: -55,
    // marginLeft: 10,
    // marginRight: 10,
    marginBottom: 10,
  },
  containerLog: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 25,
  },
  warning: {
    fontSize: 25,
    color: 'red',
  },
  data: {
    color: 'black',
    opacity: 0.8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
    paddingVertical: 10,
  },
  info: {
    width: '100%',
    paddingTop: 60,
    fontSize: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boton: {
    marginTop: 15,
  },
  bottonIn: {
    width: 250,
    borderRadius: 30,
    paddingTop: 20,
  },
  botonGo: {
    borderRadius: 30,
    marginTop: 25,
  },
  name: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  userInfo: {
    padding: 6,
    width: 350,
  },
  userName: {
    flexDirection: 'row',
    marginTop: -10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignSelf: 'center',
  },
});
