import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormItem } from 'react-native-form-component';
// aca importar actions ej: GetCategory-



export const PostProduct = () => {
    const dispatch = useDispatch();
    // aca me traigo el estado de las categorias ej: state => state.allCategories

    /*  useEffect(() => {
         //me traigo las categorias para despues poder seleccionarlas
     }) */


    return (
        <Form style={style.Form} buttonTextStyle={style.buttonText} buttonStyle={style.buttonForm} buttonText='Presiona wachin' onButtonPress={() => console.warn('QUE PRESIONAS')}>
            <FormItem
                label="Product Name"
                isRequired
                asterik
            />

            <FormItem
                label="Description"
                isRequired
                asterik
                textArea
            />

            <FormItem
                label="Price"
                isRequired
                asterik   
                secureTextEntry
            />



        </Form>
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
        marginTop: 40
    }
})
