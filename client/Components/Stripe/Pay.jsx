import { useStripe } from '@stripe/stripe-react-native'
import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, Alert, Text, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { LocalNotification, ScheduleNotification } from '../../src/services/LocalPushControllers'
import { useAuth0 } from 'react-native-auth0';
import { getUser } from '../../redux/actions'


export const Pay = ({ navigation }) => {

  const { user } = useAuth0();
  const dispatch = useDispatch();

  const userDb = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.sub))
    }
  }, [])

  useEffect(() => {
    if (userDb) {
      setInput(userDb);
    }
  }, []);

  const [input, setInput] = useState({
    name: '',
    lastName: '',
    location: { country: "", city: "", address: "" },
    image: {},
    phone: "",
    mail: user?.email
  })
  const total = useSelector(state => state.total).toFixed(2);

  const navegar = () => {
    navigation.navigate('Products')
  }

  const stripe = useStripe();
  /* 192.168.100.32 */
  /*   'https://pf-ecommerce-rho.vercel.app/payments/pay' */
  const subscribe = async () => {
    try {
      const response = await fetch('https://pf-ecommerce-rho.vercel.app/payments/pay', {
        method: 'POST',
        body: JSON.stringify({ input, total }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
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
      navegar();
     /*  https://pf-ecommerce-production-ed4d.up.railway.app/payments/email */
      axios.post(`https://pf-ecommerce-production-ed4d.up.railway.app/payments/email`, { input, total})
      LocalNotification();
      ScheduleNotification();
    } catch (err) {
      console.error(err);
      Alert.alert("Fail, try again")
    }
  }



  return (
    <ScrollView>
      <View style={{
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 25,
          color: "#cdcdcd",
          backgroundColor: "#2d2d2d",
          padding: 12,
          paddingHorizontal: 80,
          borderRadius: 20,

        }}>Billing Details</Text>
      </View>


      <View style={style.viewDetail}>
        <Text>Mail</Text>
        <Text
          style={style.textDetail}>
          {input.mail}
        </Text>
      </View>



      <View style={style.viewDetail}>
        <Text>Name</Text>
        <Text
          style={style.textDetail}>
          {input.name}
        </Text>
      </View>



      <View style={style.viewDetail}>
        <Text>LastName</Text>
        <Text
          style={style.textDetail}>
          {input.lastName}
        </Text>
      </View>

      <View style={style.viewDetail}>
        <Text>Phone</Text>
        <Text
          style={style.textDetail}>
          {input.phone}
        </Text>
      </View>

      <View style={style.viewDetail}>
        <Text>Country</Text>
        <Text
          style={style.textDetail}>
          {input.location.country}
        </Text>
      </View>

      <View style={style.viewDetail}>
        <Text>City</Text>
        <Text
          style={style.textDetail}>
          {input.location.city}
        </Text>
      </View>

      <View style={style.viewDetail}>
        <Text>Address</Text>
        <Text
          style={style.textDetail}>
          {input.location.address}
        </Text>
      </View>

      <View style={{
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 20,
          width: "100%",
          color: "green",
          backgroundColor: "#2d2d2d",
          padding: 12,
          paddingRight: 80,

        }}>Order summary:      ${total}  USD</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Pay Now" onPress={subscribe} ></Button>
      </View>

    </ScrollView>
  )
}




const style = StyleSheet.create({
  viewInput: {
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 5
  },
  viewDetail: {
    padding: 12
  },
  textDetail: {
    color: "black",
    opacity: 0.8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    paddingVertical: 10,
  },


})