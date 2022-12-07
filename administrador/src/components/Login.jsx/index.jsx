import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react';
import SaveAdmin from '../SaveAdmin';
import imagedisk from '../../logo.png'
import { useSelector } from 'react-redux';
import Home from '../Home';

const  clientId  = process.env.REACT_APP_clientId
const NO_REGISTER = 'NO_REGISTER'
const ADMIN_INCORRECT = 'ADMIN_INCORRECT'
const ADMIN_OK = 'ADMIN_OK'

export default function Login() {
  
  const admin = useSelector(state => state.admin)
  const [ user, setUser ] = useState({})
  const [login, setLogin] = useState(NO_REGISTER)
  
  
  const responseGood = (res) => {
    
    if(admin){
      if(res.profileObj.googleId === admin._id){
        setUser(res.profileObj)
        console.log('Administrador correcto: ', res.profileObj)
        setLogin(ADMIN_OK)
      }
      else{
        console.log('No es el administrador: ', res.profileObj)
        setLogin(ADMIN_INCORRECT)
      }
    }
    else{
      console.log('Administrador inexistente')
      setLogin(NO_REGISTER)
      setUser(res.profileObj)
    }
  }
  
  const responseBad = (res) => {
    console.log('todo mal: ', res)
    console.log(res.obj)
  }
  
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({clientId})
        }
        gapi.load("client:auth2", start)
      },
      [])
   console.log('login', login)
   if(login === NO_REGISTER){
      return (
          <div>
            <h3></h3>
          <GoogleLogin
            clientId
            buttonText="Login con google"
            onSuccess={responseGood}
            onFailure={responseBad}
            cookiePolicy={'single_host_policy'}
          />
          <div className={user? 'profile':'hidden'}>
            <br></br>
           <SaveAdmin id={user.googleId} name={user.name} mail={user.email} image={imagedisk} setLogin={setLogin} />  
          {/* <SaveAdmin id='123456456789' name='Leandro Freire' mail='asdfasd@asdf.com' image={imagedisk}/> */}
          </div>
        </div>
    )}
  if(login === ADMIN_INCORRECT){
      alert('administrador incorrecto')
      setLogin(NO_REGISTER)
        return ;
      }
  if(login === ADMIN_OK){
        return <div>Administrador correcto
          <Home />
        </div>
      }
}