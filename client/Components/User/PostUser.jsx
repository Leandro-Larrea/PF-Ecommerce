import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity,Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { cleanUser, getCategories, getUser, postUser } from '../../redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Home/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth0} from 'react-native-auth0';
import {stylesCardProduct} from '../../styles';
import validate from '../../functions/userValidation';
import { color } from '@rneui/base';

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

  const handleSubmit = async () => {
    if (
      !input.name ||
      !input.lastName || !input.location.country ||
      !input.location.city || !input.location.address ||
      !input.mail ||
      !input.phone
    ) {
      Alert.alert('Missing fields');
    } else {
      if (!userDb) {
        Alert.alert('Data Saved Succesfully 👍 ');
        await dispatch(postUser({...input, _id: user.sub}));
        dispatch(getUser(user.sub))
      }
      if (userDb) { 
        Alert.alert('Data Saved Succesfully 👍 ');
        dispatch(postUser({...input, _id: user.sub}))
      }
    }
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
          !Object.values(errors).some(e=> e !== null)
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
          !Object.values(errors).some(e=> e !== null)
            ? 'Save'
            : '*Missing data*'
        }
         
          
        onButtonPress={() => handleSubmit()}>
          <Text style={errors.name?style.msg: style.none}>{errors.name}</Text>
        <FormItem
          onBlur={()=>  setErrors({...errors, ...validate("name",input)})}
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Name"
          labelStyle={style.label}
          style={errors.name? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={input.name}
          onChangeText={text => {
            setInput({...input, name: text})             
          }}
        />
        <Text style={errors.lastName?style.msg: style.none}>{errors.lastName}</Text>
        <FormItem
           onBlur={()=>  setErrors({...errors, ...validate("lastName",input)})}
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Last name"
          labelStyle={style.label}
          style={errors.lastName? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={input.lastName}
          onChangeText={text => {
            setInput({...input, lastName: text})
          }}
        />
        <Text style={errors.mail?style.msg: style.none}>{errors.mail}</Text>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          onBlur={()=>  setErrors({...errors, ...validate("mail",input)})}
          label="mail"
          labelStyle={style.label}
          isRequired
          style={errors.mail? style.errorForm:style.inputForm}
          asterik
          value={input.mail}
          onChangeText={text => {
            setInput({...input, mail: text})
          }}
        />
        <Text style={errors.phone?style.msg: style.none}>{errors.phone}</Text>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          onBlur={()=>  setErrors({...errors, ...validate("phone",input)})}
          label="Phone"
          labelStyle={style.label}
          style={errors.phone? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={input.phone}
          onChangeText={e => {
            setInput({...input, phone: e}) 
          }}
        />
        <Text style={errors.country?style.msg: style.none}>{errors.country}</Text>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          onBlur={()=>  setErrors({...errors, ...validate("country",input)})}
          label="Country"
          labelStyle={style.label}
          style={errors.country? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={input.location && input.location.country}
          onChangeText={text => {
            setInput({...input, location: {...input.location, country: text}})
          }}
        />
        <Text style={errors.city?style.msg: style.none}>{errors.city}</Text>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          onBlur={()=>  setErrors({...errors, ...validate("city",input)})}
          label="City"
          labelStyle={style.label}
          style={errors.city? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={input.location && input.location.city}
          onChangeText={text => {
            setInput({...input, location: {...input.location, city: text}})
          }}
        />
        <Text style={errors.address?style.msg: style.none}>{errors.address}</Text>
        <FormItem
          textInputStyle={style.textoInput}
          cursorColor={'white'}
          label="Address"
          onBlur={()=>  setErrors({...errors, ...validate("address",input)})}
          labelStyle={style.label}
          style={errors.address? style.errorForm:style.inputForm}
          isRequired
          asterik
          value={ input.location && input.location.address}
          onChangeText={text => {
            setInput({...input, location: {...input.location, address: text}})
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
            <Text style={{color: 'white'}}>Photo</Text>
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
    alignSelf: "center",
    color:"white"
  },
  msg:{
    color:"white",
    textAlign:"right"
  },
  none:{
    display:"none"
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
    borderColor:'#89c30d',
    borderWidth:2,
    marginTop:5
  },

  errorForm: {
    
    borderColor: "red",
    borderWidth:2,
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
    color:"black",
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
