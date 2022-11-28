import React from 'react';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.100.11:3001';


const App = () => {
  /* 
const Stack = createNativeStackNavigator(); */
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
