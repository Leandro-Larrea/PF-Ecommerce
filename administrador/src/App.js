import { useDispatch } from 'react-redux';
import './App.css';
import Login from './components/Login.jsx';
import { getAdmin } from './redux/action';
import axios from 'axios'
import './App.css'

axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const dispatch = useDispatch()
  dispatch(getAdmin())


  return (
    <div >
      <h1 className="underline text-3xl">
        Administrador
      </h1>
      <Login />
      <br></br>

    </div>
  );
}

export default App;
