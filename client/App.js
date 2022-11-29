import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
//--------- AUTH0
import { Auth0Provider} from 'react-native-auth0';

axios.defaults.baseURL = 'http://192.168.100.11:3001';


const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <Auth0Provider domain={"dev-df4sl8wp8lidlkx3.us.auth0.com"} clientId={"i27bkoZvpjiQeyGa69XdzT1JcWnDf0Cn"}>
        <MainContainer />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
