import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { getCategories, postProduct } from '../../redux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';




export const PostProduct = () => {


    const dispatch = useDispatch();

    // aca me traigo el estado de las categorias ej: state => state.allCategories
    const allCategories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories()) //me traigo las categorias para despues poder seleccionarlas
    }, [dispatch])

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
                console.log("formulario", input)
            }
        })
    }


    const handleSubmit = () => {
        console.log(input)
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

    return (
        <ScrollView>

        <Form style={style.Form} buttonTextStyle={style.buttonText} buttonStyle={style.buttonForm} buttonText='Crear Producto 😎' onButtonPress={() => handleSubmit()}>
            <FormItem
                label="Product Name"
                isRequired
                asterik
                value={input.title}
                onChangeText={(text) => { setInput({ ...input, title: text }) }}
                />

            <FormItem
                label="Price -USD"
                isRequired
                asterik
                value={input.price}
                onChangeText={(e) => { setInput({ ...input, price: Number(e) }) }}
                />

            <FormItem
                label="Description"
                isRequired
                asterik
                value={input.description}
                onChangeText={(text) => { setInput({ ...input, description: text }) }}
            />

            <FormItem
                label="Stock"
                isRequired
                asterik
                value={input.stock}
                onChangeText={(e) => { setInput({ ...input, stock: Number(e) }) }}
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
                label="Category"
                placeholder='-Select Category-'
                selectedValue={input.category}
                onSelection={(item) => { setInput({ ...input, category: item.value }) }}
                />

            <View style={{ alignItems: "center" }}>
                <Button
                    onPress={() => openGallery()}
                    title='Upload Image'>
                </Button>
                <Image
                    source={image}
                    style={{ height: 150, width: 150, borderRadius: 1, borderWidth: 2, borderColor: "black" }}>

                </Image>
            </View>




        </Form>
</ScrollView>
    );
}

const style = StyleSheet.create({
    buttonForm: {
        backgroundColor: "violet",
        width: 200,
        left: 100
    },
    buttonText: {
        color: "white",
        fontStyle: "italic"
    },
    Form: {
        flex: 1,
        marginTop: 40
    }
})
