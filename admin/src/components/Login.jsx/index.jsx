/* import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script' */
import { useEffect, useState } from 'react';
import SaveAdmin from '../SaveAdmin'
import imagedisk from '../../images/logo.png'

const  clientId  = process.env.REACT_APP_clientId


export default function Login() {
  const [ flag, setFlag ] = useState(0)
  /* 
  const [ user, setUser ] = useState({})
    const responseGood = (res) => {
        setUser(res.profileObj)
       //console.log(user)
      }
      
      const responseBad = (res) => {
       // console.log('todo mal: ', res)
        //console.log(res.obj)
      }
      
      useEffect(() => {
        const start = () => {
          gapi.auth2.init({clientId})
        }
        gapi.load("client:auth2", start)
      },
      [])
    let a = user.imageUrl
    */
    return (
          <div>
    {/*         <h3></h3>
            <div class="g-signin2" data-onsuccess="onSignIn">
          <GoogleLogin
            clientId
            buttonText="Login con google"
            onSuccess={responseGood}
            onFailure={responseBad}
            cookiePolicy={'single_host_policy'}
            />
            </div> 
          <div className={user? 'profile':'hidden'}>
            <br></br>*/}
          {/* <SaveAdmin id={user.googleId} name={user.name} mail={user.email} image={a}/>  */}
          <SaveAdmin id='123456' name='Leandro Freire' mail='asdfasd@asdf.com' image={imagedisk} flag={flag} setFlag={setFlag} />
       {/*    </div>  */}
        </div>
    )
}