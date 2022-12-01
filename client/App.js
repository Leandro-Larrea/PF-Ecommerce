import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
//import Config from 'react-native-config';
//--------- AUTH0
import config from './Auth0/auth0-config'
import { Auth0Provider} from 'react-native-auth0';

// Config.IP_LOCAL;
// Config.ID_CLIENT;
// Config.DOMAIN_AUTH0;


axios.defaults.baseURL = `http://192.168.100.11:3001`;


const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <MainContainer />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
