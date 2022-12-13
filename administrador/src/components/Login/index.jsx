import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react';
import SaveAdmin from '../SaveAdmin';
import imagedisk from '../../logo.png'
import { getAdmin } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const  clientId  = process.env.REACT_APP_clientId


export default function Login() {
  
  const [ user, setUser ] = useState({})
  const [ flag, setFlag ] = useState('')

  const dispatch = useDispatch()
  const { adminDb } = useSelector(state => state)
  
    const responseGood = (res) => {
      console.log('obj keys: ', Object.keys(adminDb).length)
      console.log('adminDB: ', adminDb)
      if(Object.keys(adminDb).length) {
        if(adminDb._id===res.profileObj.googleId){
          setUser(res.profileObj)
          setFlag(2)
          console.log('adminFlag', flag)
        }
        else{
          alert('No se reconoce el administrador')
          setFlag(0)
          console.log('adminFlag', flag)
        }
      }
      else{
        setUser(res.profileObj)
        setFlag(1)
        console.log('adminFlag', flag)
      }

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

      useEffect(() => {
        dispatch(getAdmin())
      }, [])

    let a = user.imageUrl
   
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
          {user? <SaveAdmin id={user.googleId} name={user.name} mail={user.email} image={a} flag={flag} setFlag={setFlag} /> : '' }
          {/* <SaveAdmin id='123456' name='Leandro Freire' mail='asdfasd@asdf.com' image={imagedisk}/> */}
          </div>
        </div>
    )
}