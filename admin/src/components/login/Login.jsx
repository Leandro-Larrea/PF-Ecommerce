import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAdmins, postAdmin } from '../../redux/action';
import { GET_ADMIN } from '../../redux/action/const';
import SaveAdmin from '../SaveAdmin'
import './login.scss'



export default function Login() {
   

  const { admins } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let flag = 0
  useEffect(() => {
    dispatch(getAdmins())
    if(admins)
    flag = 20
    console.log('useEffect')
  },[])

  const [ input, setInput ] = useState({
    id: '',
    pass: '',
    pass2: ''
  })
  const [ admin, setAdmin ] = useState({
    id: '',
    pass: ''
  })


  function handleOnChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

 

  function handleOnSubmit1(e){
    e.preventDefault()
    if(Object.keys(admins).length === 0){
      dispatch(postAdmin(input))
      alert('Administrator registered')
      dispatch({
        type: GET_ADMIN,
        payload: {id: input.id, pass: input.pass}
      })
      setInput({
        id:'',
        pass:'',
        pass2: ''
      })
      navigate('/home')
    }
  }

  function handleOnSubmit2(e){
    e.preventDefault()
    let r = admins.filter(r => r._id===input.id)
    console.log('r',r)
    if(r.length === 1 && r[0].pass === input.pass){
      console.log('bien')
      dispatch({
        type: GET_ADMIN,
        payload: {id: input.id, pass: input.pass}
      })
      setInput({
        id: '',
        pass: '',
        pass2: ''
      })
      navigate('/home')
    }
    else{
      alert('User or password incorrect')
      flag = 0
      setInput({
        id: '',
        pass: '',
        pass2: ''
      })

    }
  }

  if(!admins.length)
    return (
      <div className='indice'>
        <h1 className='titulo'>
          {admins?.length? 'Hello, please enter user and password': 'Hello, Welcom to Console.Game, please register an administrator'}
        </h1>
        <form onSubmit={handleOnSubmit1} className='formulario2'>
          <div>
            <div>
              <label className='etiqueta'>Enter an user id:</label>
            </div>
            <input type='text' name='id' onChange={handleOnChange} value={input.id} className='input' />
            {input.id.length < 5? <div className='labelError'>Id is too short</div>: <div className='labelCorrect'>Id OK</div>}
          </div>
          <div>
            <div className='etiqueta'>Enter a password</div>
            <input type='password' name='pass' onChange={handleOnChange} value={input.pass} className='input' />
          </div>
          <div>
            <label className='etiqueta'>Enter a password again</label>
            <input type='password' name='pass2' onChange={handleOnChange} value={input.pass2} className='input' />
          </div>
            {input.pass===input.pass2 && input.pass.length>0? <div className='labelCorrect'>Passwords corrects</div>:''}
            {input.pass===input.pass2 ?'':<label className='labelError'>Paswords are differents</label>}
          {input.pass===input.pass2 && input.id.length>4? <input type='submit' value='Send' className='boton'/>:''}

        </form>
      </div>
    )



  if(flag===0)
    return (
      <div className='indice'>
          <form onSubmit={handleOnSubmit2} className='formulario'>
              <div className='etiqueta'>Enter your id admin and password
              </div>
                  <label className='etiqueta'>Admin id:</label>
              <div>
                  <input autoFocus type='text' name='id' onChange={handleOnChange} value={input.id} className='input'/>
              </div>
              <div>
                  <label className='etiqueta'>Password:</label>
              </div>
              <div>
                  <input type='password' name='pass' onChange={handleOnChange} value={input.pass} className='input' />
              </div>
              <div>
                  <input type='submit' value='Send'  className='boton' />
              </div>
              {flag===1? <div className='etiqueta'>User or password failed</div>:''}
          </form>
      </div>
    )

}