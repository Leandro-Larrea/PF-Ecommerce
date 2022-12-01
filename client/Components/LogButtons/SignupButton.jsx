import React from "react";
import {Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
    title="Sign up"
      onPress={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    />
  );
};

export default SignupButton;



    // const onPress = async () => {
    //     try {
    //         await authorize();
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    //return <Button onPress={onPress} title="Log in" />

