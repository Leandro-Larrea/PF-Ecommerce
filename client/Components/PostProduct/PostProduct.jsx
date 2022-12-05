import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { getCategories, postProduct } from '../../redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Home/Header';
import LinearGradient from 'react-native-linear-gradient';



export const PostProduct = () => {


    const dispatch = useDispatch();

    // aca me traigo el estado de las categorias ej: state => state.allCategories
    const allCategories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories()) //me traigo las categorias para despues poder seleccionarlas
    }, [dispatch])

    const [errors, setErrors] = useState({})

    function validate(input) {
        let errors = {};
        if (!input.title) errors.title = "Enter title"
        if (!input.price) errors.price = "Enter price"
        if (!input.description) errors.description = "Enter description"
        if (!input.category) errors.category = "Enter category"
        if (!input.image) errors.title = "Enter Image"
        if (!input.stock) errors.title = "Enter Stock"

        return errors;
    }

    const [image, setImage] = useState({ uri: '' });
    const [input, setInput] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        rating: { points: 0, votes: 0, rating: 0 },
        image: '',
        details: [],
        stock: ''
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
        if (!input.title | !input.price | !input.description | !input.category | !input.image | !input.stock) {
            Alert.alert('Completar todos los campos')
        } else {
            dispatch(postProduct(input));
            Alert.alert('Producto Creado 👍 ')
            setInput({
                title: '',
                price: '',
                description: '',
                category: '',
                rating: { points: 0, votes: 0, rating: 0 },
                image: '',
                details: [],
                stock: ''
            })
            setImage({ uri: '' })
        }
    }

    return (
        <ScrollView>
        <LinearGradient
        style={{paddingBottom: 67}}
          colors={['#89c30d', 'white', '#2d2d2d' ]}
          start={{ x: 0.7, y: 0 }}
          >

            <View style={style.header}>
                <Header />
            </View>

            <Form style={style.Form} buttonTextStyle={!Object.keys(errors).length > 0 ? style.buttonText : style.buttonTextFail} buttonStyle={!errors.price && !errors.title && !errors.description && !errors.category && !errors.image && !errors.stock ? style.buttonForm : style.buttonFail} buttonText={!Object.keys(errors).length > 0 ? 'Crear Producto ✅' : '*Faltan Datos*'} onButtonPress={() => handleSubmit()}>
                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Product Name"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.title}
                    onChangeText={(text) => { setInput({ ...input, title: text }), setErrors(validate({ ...input, title: text })) }}
                    />

                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Price $USD"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.price}
                    onChangeText={(e) => { setInput({ ...input, price: Number(e) }), setErrors(validate({ ...input, price: Number(e) })) }}
                    />

                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Description"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.description}
                    onChangeText={(text) => { setInput({ ...input, description: text }), setErrors(validate({ ...input, description: text })) }}
                    />

                <FormItem
                    textInputStyle={style.textoInput}
                    cursorColor={"white"}
                    label="Stock"
                    labelStyle={style.label}
                    style={style.inputForm}
                    isRequired
                    asterik
                    value={input.stock}
                    onChangeText={(e) => { setInput({ ...input, stock: Number(e) }), setErrors(validate({ ...input, stock: Number(e) })) }}
                    />


                <Picker
                    items={[
                        { label: 'Notebook', value: 'Notebook' },
                        { label: 'Keyboard', value: 'Keyboard' },
                        { label: 'Pc', value: 'Pc' },
                        { label: 'Ipad', value: 'Ipad' },
                        { label: 'Consoles', value: 'Consoles' },
                        { label: 'Headphones', value: 'Headphones' },
                        { label: 'Monitors', value: 'Monitors' },
                        { label: 'Joysticks', value: 'Joysticks' },
                    ]}
                    style={style.picker}
                    asterik
                    buttonStyle={{ marginHorizontal: 20, backgroundColor: "rgba(114, 115, 114, 1)" }}
                    iconWrapperStyle={{ backgroundColor: "rgba(114, 115, 114, 1)" }}
                    pickerIcon={<Icon name='caret-down' size={25} />}
                    label="Category"
                    labelStyle={style.label}
                    placeholder='-Select Category-'
                    selectedValueStyle={{ color: "white" }}
                    selectedValue={input.category}
                    onSelection={(item) => { setInput({ ...input, category: item.value }), setErrors(validate({ ...input, category: item.value })) }}
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
                    </LinearGradient>
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
