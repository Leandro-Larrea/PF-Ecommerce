import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity,Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { getCategories, getUser, postUser } from '../../redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Home/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth0} from 'react-native-auth0';
import {stylesCardProduct} from '../../styles';

export const PostUser = () => {
   
    const {user} = useAuth0();
    const dispatch = useDispatch();
    const userDb = useSelector(state => state.user)
    const [usuario, setUsuario] = useState(false)

   
    // aca me traigo el estado de las categorias ej: state => state.allCategories
    //const allCategories = useSelector(state => state.categories)

    useEffect(() => {
      if (user) {
        dispatch(getUser(user.sub))
      }
    },[])

    useEffect(() => {
      if (userDb !== null && !Array.isArray(userDb)) {
        setUsuario(true)
      }
    }, [userDb]);
  
    useEffect(() => {
  
      if (usuario === true) {
        setInput(userDb);
      }
    },[usuario])

  const [errors, setErrors] = useState({});

    const validation ={
        name: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{1,40}$/,
        lastName: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{1,40}$/,
        // description: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{3,702}$/,
        mail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        country: /^[A-Z]{1}[a-zA-Z.:,'\s_-]{1,62}$/,
        city: /^[A-ZA-Z]{1}[a-zA-Z.:,'\s_-]{1,62}$/,
        address: /^[A-ZA-Z]{1}[a-zA-Z.\d':,\s_-]{1,92}$/,
      }

    function validate(input) {
        let errors = {};
        if (!validation.name.test(input.name)) errors.name = "Enter name"
        if (!validation.lastName.test(input.lastName)) errors.lastName = "Enter Last name"
        if (!validation.phone.test(input.phone)) errors.phone = "Enter phone"
        if (!validation.country.test(input.location.country)) errors.country = "Enter country"
        if (!validation.city.test(input.location.city)) errors.city = "Enter city"
        if (!validation.address.test(input.location.address)) errors.address = "Enter address"
        if (!validation.mail.test(input.mail)) errors.mail = "Enter mail"
    
        return errors;
    }

    const [image, setImage] = useState({ uri: '' });
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        location: { country:"", city:"", address:"" },
        image: "",
        phone:"",
        mail:user?.email
    })
  
    const openGallery = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
  
            if (response.didCancel) {
                
            } else if (response.error) {
                ;
            } else if (response.customButton) {
                
            } else {
                const source = 'data:image/jpeg;base64,' + response.assets[0].base64
                /* setImage({ uri: source }); */
                setInput({ ...input, image: source })
                setErrors(validate({ ...input, image: source }))
            }
        })
    }

  const handleSubmit = () => {
    if (
      !input.name ||
      !input.lastName | !input.location.country ||
      !input.location.city | !input.location.address ||
      !input.mail ||
      !input.phone
    ) {
      Alert.alert('Missing fields');
    } else {
      if (!userDb) {
        dispatch(postUser({...input, _id: user.sub}));
        dispatch(getUser(user.sub))
        Alert.alert('data saved succesfully 👍 ');
      }
      if (userDb) {  //si ya hay userDb tendria q actualizar los campos cambiados
        Alert.alert('aca habria que hacer algo pero no se que');
        dispatch(getUser(user.sub))
      }
    }
   /*  setInput({
      name: '',
      lastName: '',
      location: {country: '', city: '', address: ''},
      image: '',
      phone: '',
      mail: '',
    });
    setImage({uri: ''}); */
  };

  return (
    <ScrollView style={style.main}>
      <View style={style.header}>
        <Header />
      </View>
      <View style={{paddingTop: 30}}>
        <Text style={style.title}>Please, Complete your profile information</Text>
      </View>
      <View style={style.formContainer}>
      <Form
        style={style.Form}
        buttonTextStyle={
          !Object.keys(errors).length > 0
            ? style.buttonText
            : style.buttonTextFail
        }
        buttonStyle={
          !errors.name &&
          !errors.lastName &&
          !errors.mail &&
          !errors.phone &&
          !errors.country &&
          !errors.city &&
          !errors.address
            ? style.buttonForm
            : style.buttonFail
        }
        buttonText={
          !Object.keys(errors).length > 0
            ? 'Save'
            : '*Missing data*'
        }
        onButtonPress={() => handleSubmit()}>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Name"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={input.name}
          onChangeText={text => {
            setInput({...input, name: text}),
              setErrors(validate({...input, name: text}));
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Last name"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={input.lastName}
          onChangeText={text => {
            setInput({...input, lastName: text}),
              setErrors(validate({...input, lastName: text}));
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="mail"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={input.mail}
          onChangeText={text => {
            setInput({...input, mail: text}),
              setErrors(validate({...input, mail: text}));
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Phone"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={input.phone}
          onChangeText={e => {
            setInput({...input, phone: e}),
              setErrors(validate({...input, phone: e}));
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Country"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik

          value={input.location && input.location.country}

          onChangeText={text => {
            setInput({...input, location: {...input.location, country: text}}),
              setErrors(
                validate({
                  ...input,
                  location: {...input.location, country: text},
                }),
              );
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="City"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={input.location && input.location.city}
          onChangeText={text => {
            setInput({...input, location: {...input.location, city: text}}),
              setErrors(
                validate({...input, location: {...input.location, city: text}}),
              );
          }}
        />
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Address"
          labelStyle={style.label}
          style={style.inputForm}
          isRequired
          asterik
          value={ input.location && input.location.address}
          onChangeText={text => {
            setInput({...input, location: {...input.location, address: text}}),
              setErrors(
                validate({
                  ...input,
                  location: {...input.location, address: text},
                }),
              );
          }}
        />
        <View style={style.photoContainer}>
          {input.image ? (
            <Image
              source={{ uri: input.image}}
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                borderWidth: 1,
                marginBottom:20,

              }}></Image>
          ) : (
            <Text style={{color: 'black'}}>Photo</Text>
          )}
              <TouchableOpacity
                onPress={() => openGallery()}
                style={{
                  flexDirection: 'row',
                  height:'18%',
                  width:'50%',
                  borderRadius:5,
                  backgroundColor:'#0e0e0e',
                  padding:5,
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                <Icon name="camera-sharp" size={30} color={'#c0c1cb'}></Icon>
                <Text style={{color: '#c0c1cb', fontSize: 15, marginTop: 3}}>
                  {' '}
                  Upload Image
                </Text>
              </TouchableOpacity>
        </View>
      </Form>
      </View>
    </ScrollView>
  );
};


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const style = StyleSheet.create({
  main:{
     backgroundColor:'#2d2d2d'
    },
  title:{
    fontFamily:'Louis George Cafe Bold',
    color:'white',
    textAlign:'center',
    fontSize:15
  },
  buttonForm: {
    backgroundColor: '#89c30d',
    width: '100%',
    alignSelf: "center"
    
  },
  
  buttonTextFail: {
    color: 'red',
  },
  Form: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
  inputForm: {
    backgroundColor: 'transparent',
    borderColor:'#89c30d',
    borderWidth:1,
    marginTop:5
  },
  
  buttonFail: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: '50%',
    alignSelf: 'center',
    marginTop: 0,
  },
  label:{
   color:'white'
  },
  textoInput: {
    color: '#c0c1cb',
  },
  header: {
    backgroundColor: '#2d2d2d',
    height:HEIGHT*0.1,
    borderBottomWidth:1,
    borderColor:'#676767'
  },
  formContainer:{
    width:WIDTH*0.8,
    alignSelf:'center'
  },
  photoContainer:{
    alignItems:'center',
    height:HEIGHT*0.30
  }

});
