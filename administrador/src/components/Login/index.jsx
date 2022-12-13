import { useEffect, useState } from 'react';
import SaveAdmin from '../SaveAdmin';
import { getAdmin } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

const  clientId  = process.env.REACT_APP_clientId


export default function Login() {

  const { loginWithRedirect } = useAuth0()
  
 /*  const [ user, setUser ] = useState({})
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

      },
      [])

      useEffect(() => {
        dispatch(getAdmin())
      }, [])

    let a = user.imageUrl */
   
    return (
          <div>
            <h3></h3>
            <button onClick={() => loginWithRedirect()}>Login</button>
            <br></br>
         {/*  {user? <SaveAdmin id={user.googleId} name={user.name} mail={user.email} image={a} flag={flag} setFlag={setFlag} /> : '' } */}
          {/* <SaveAdmin id='123456' name='Leandro Freire' mail='asdfasd@asdf.com' image={imagedisk}/> */}
          <div>LISTOOOO</div>
          </div>

    )
}