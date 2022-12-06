import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { getCategories, postUser } from '../../redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Home/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth0} from 'react-native-auth0';



export const PostUser = () => {

    const {user} = useAuth0();
    const dispatch = useDispatch();
   

    // aca me traigo el estado de las categorias ej: state => state.allCategories
    const allCategories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories()) //me traigo las categorias para despues poder seleccionarlas
    }, [dispatch])

    const [errors, setErrors] = useState({})

    function validate(input) {
        let errors = {};
        if (!input.name) errors.name = "Enter name"
        if (!input.lastName) errors.lastName = "Enter Last name"
        if (!input.phone) errors.phone = "Enter phone"
        if (!input.location.country) errors.country = "Enter country"
        if (!input.location.city) errors.city = "Enter city"
        if (!input.location.address) errors.address = "Enter address"
        if (!input.email) errors.email = "Enter email"
        
      

        return errors;
    }

    const [image, setImage] = useState({ uri: '' });
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        location: { country:"", city:"", address:"" },
        image:"",
        phone:""
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
        if (!input.name || !input.lastName | !input.location.country || !input.location.city | !input.location.address || !input.email || !input.phone) {
            Alert.alert('Completar todos los campos')
        } else {
            console.log("else", user.sub)
            dispatch(postUser({...input, _id:user.sub}));
            Alert.alert('Producto Creado 👍 ')
            setInput({
                name: '',
                lastName: '',
                location: { country:"", city:"", address:"" },
                image:"",
                phone:"",
                email:""
            })
            setImage({ uri: '' })
        }
    }

    return (
        <ScrollView>
        {/* <LinearGradient
        style={{paddingBottom: 67}}
          colors={['#89c30d', 'white', '#2d2d2d' ]}
          start={{ x: 0.7, y: 0 }}
          > */}

            <View style={style.header}>
                <Header />
            </View>

            <Form style={style.Form} buttonTextStyle={!Object.keys(errors).length > 0 ? style.buttonText : style.buttonTextFail} buttonStyle={!errors.name && !errors.lastName && !errors.email && !errors.phone && !errors.country && !errors.city && !errors.address ? style.buttonForm : style.buttonFail} buttonText={!Object.keys(errors).length > 0 ? 'Guardar Datos ✅' : '*Faltan Datos*'} onButtonPress={() => handleSubmit()}>
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Name"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.name}
                    onChangeText={(text) => { setInput({ ...input, name: text }), setErrors(validate({ ...input, name: text })) }}
                    />

                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Last name"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.lastName}
                    onChangeText={(text) => { setInput({ ...input, lastName: text }), setErrors(validate({ ...input, lastName: text})) }}
                    />
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Email"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.email}
                    onChangeText={(text) => { setInput({ ...input, email: text }), setErrors(validate({ ...input, email: text })) }}
                    />
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Phone"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.phone}
                    onChangeText={(e) => { setInput({ ...input, phone: e }), setErrors(validate({ ...input, phone: e })) }}
                    />
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Country"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.location.country}
                    onChangeText={(text) => { setInput({ ...input, location:{...input.location,country: text }}), setErrors(validate({ ...input, location:{...input.location,country: text }})) }}
                    />
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="City"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.location.city}
                    onChangeText={(text) => { setInput({ ...input, location:{...input.location,city: text }}), setErrors(validate({ ...input, location:{...input.location,city: text }})) }}
                    />
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Address"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.location.address}
                    onChangeText={(text) => { setInput({ ...input, location:{...input.location,address: text }}), setErrors(validate({ ...input, location:{...input.location,address: text }})) }}
                    />

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => openGallery()}
                        style={{ backgroundColor: "#018c34", padding: 9, flexDirection:"row", marginBottom: 9}}
                        >
                            <Icon name="camera-sharp" size={30} color={"white"} ></Icon>
                            <Text style={{color: "white", fontSize: 17, marginTop: 3}}>  Upload Image</Text>
                    </TouchableOpacity>
                    {input.image.length > 0 ?
                        <Image
                            source={image}
                            style={{ height: 150, width: 150, borderRadius: 1, borderWidth: 2, borderColor: "black" }}>

                        </Image> :
                        <Text style={{ color: "black" }}>Photo</Text>
                    }
                </View>

            </Form>
                    {/* </LinearGradient> */}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    buttonForm: {
        backgroundColor: "#2d2d2d",
        borderColor: "white",
        borderWidth: 1,
        width: 200,
        left: 100
    },
    buttonText: {
        color: "white",
        fontStyle: "italic"
    },
    buttonTextFail: {
        color: "red",
    },
    Form: {
        flex: 1,
        justifyContent:"center",
        marginTop: 40,
    },
    inputForm: {
        backgroundColor: "rgba(114, 115, 114, 1)",
        marginHorizontal: 20,
    },
    label: {
        marginLeft: 20
    },
    buttonFail: {
        backgroundColor: "transparent",
        borderRadius: 0,
        width: "50%",
        alignSelf: "center",
        marginTop: 0
    },
    textoInput: {
        color: "white"
    },
    header: {
        flex: 1,
        backgroundColor: '#2d2d2d',
        paddingTop: 15,
        paddingBottom: 15,
    },
})