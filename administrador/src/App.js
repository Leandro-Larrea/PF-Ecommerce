import './App.css';
import Login from './components/Login';
import { PreviusLogin } from './components/previusLogin/PreviusLogin';
import axios from 'axios'


//axios.defaults.baseURL = 'https://pf-ecommerce-production-ed4d.up.railway.app';
axios.defaults.baseURL = 'http://localhost:3001'

function App() {


  return (
    <div className="App">
      <h1>
        Administrador
      </h1>
      <PreviusLogin />
      <br></br>

    </div>
  );
}

export default App;
