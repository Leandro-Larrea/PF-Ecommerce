import { useStripe } from '@stripe/stripe-react-native'
import React, { useState } from 'react'
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const Pay = () => {
  const total = useSelector(state => state.total);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [price, setPrice] = useState(total);

  const stripe = useStripe();
  /* 192.168.100.32 */
  const subscribe = async () => {
    try {
      const response = await fetch('https://pf-ecommerce-rho.vercel.app/payments/pay', {
        method: 'POST',
        body: JSON.stringify({ name, lastname, mail, price }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log("response", response);
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Mercaderia',
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message)
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret
      })
      if (presentSheet.error) return Alert.alert(presentSheet.error.message)
      Alert.alert('Payment Complete, thank you!');
      axios.post("/payments/email", {mail, name, lastname, price})
      .then(console.log("exitoso"))
      .catch(console.log("le erraste"))
      console.log("mail enviado front asda");

    } catch (err) {
      console.log("data");
      console.error(err);
      Alert.alert("Fail, try again")
    }
  }

  return (
    <View>
      <View style={style.viewInput}>

        <Text>Name</Text>
        <TextInput value={name} onChangeText={text => setName(text)} placeholder="Name..."
          style={style.textInput}
          />
      </View>
      <View style={style.viewInput}>

        <Text>LastName</Text>

        <TextInput value={lastname} onChangeText={text => setLastname(text)} placeholder="LastName..."
          style={style.textInput}
          />
      </View>
      <View style={style.viewInput}>

        <Text>Mail</Text>

        <TextInput value={mail} onChangeText={text => setMail(text)} placeholder="example@example.com"
          style={style.textInput}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Pay Now" onPress={subscribe} ></Button>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  viewInput: {
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 5
  },
  textInput: {
    width: 300,
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
  },
})