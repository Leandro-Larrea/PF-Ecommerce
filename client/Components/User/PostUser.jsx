import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
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
    console.log(user)
   
    // aca me traigo el estado de las categorias ej: state => state.allCategories
    const allCategories = useSelector(state => state.categories)

    useEffect(() => {
      if (user) {
        dispatch(getUser(user.sub))
      }
    },[])

  useEffect(() => {
    if (userDb) {
      setInput(userDb);
    }
  }, []);

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.name) errors.name = 'Enter name';
    if (!input.lastName) errors.lastName = 'Enter Last name';
    if (!input.phone) errors.phone = 'Enter phone';
    if (!input.location.country) errors.country = 'Enter country';
    if (!input.location.city) errors.city = 'Enter city';
    if (!input.location.address) errors.address = 'Enter address';
    if (!input.mail) errors.mail = 'Enter mail';

    return errors;
  }

    const [image, setImage] = useState({ uri: '' });
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        location: { country:"", city:"", address:"" },
        image:"",
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
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error : ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom Button: ', response.customButton);
            } else {
                const source = 'data:image/jpeg;base64,' + response.assets[0].base64;
                setImage({ uri: source });
                console.log("se cargo la imagen wachin");
                console.log(image);
                setInput({ ...input, image: source })
                setErrors(validate({ ...input, image: source }))
                console.log("formulario", input)
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
        Alert.alert('data saved succesfully 👍 ');
      }
      if (userDb) {
        Alert.alert('aca habria que hacer algo pero no se que');
      }
    }
    setInput({
      name: '',
      lastName: '',
      location: {country: '', city: '', address: ''},
      image: '',
      phone: '',
      mail: '',
    });
    setImage({uri: ''});
  };

  return (
    <ScrollView>
      <View style={style.header}>
        <Header />
      </View>
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
            ? 'Save data ✅'
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
          value={input.location.country}
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
          value={input.location.city}
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
          value={input.location.address}
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
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => openGallery()}
            style={{
              backgroundColor: '#018c34',
              padding: 9,
              flexDirection: 'row',
              marginBottom: 9,
            }}>
            <Icon name="camera-sharp" size={30} color={'white'}></Icon>
            <Text style={{color: 'white', fontSize: 17, marginTop: 3}}>
              {' '}
              Upload Image
            </Text>
          </TouchableOpacity>
          {input.image.length > 0 ? (
            <Image
              source={image}
              style={{
                height: 150,
                width: 150,
                borderRadius: 1,
                borderWidth: 2,
                borderColor: 'black',
              }}></Image>
          ) : (
            <Text style={{color: 'black'}}>Photo</Text>
          )}
        </View>
      </Form>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  buttonForm: {
    backgroundColor: '#2d2d2d',
    borderColor: 'white',
    borderWidth: 1,
    width: 200,
    left: 100,
  },
  buttonText: {
    color: 'white',
    fontStyle: 'italic',
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
    backgroundColor: 'rgba(114, 115, 114, 1)',
    marginHorizontal: 20,
  },
  label: {
    marginLeft: 20,
  },
  buttonFail: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: '50%',
    alignSelf: 'center',
    marginTop: 0,
  },
  textoInput: {
    color: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingTop: 15,
    paddingBottom: 15,
  },
});
