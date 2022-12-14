import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAdmins, postAdmin } from '../../redux/action';
import { GET_ADMIN } from '../../redux/action/const';
import SaveAdmin from '../SaveAdmin'



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
      setInput({
        id:'',
        pass:'',
        pass2: ''
      })
    }
  }

  function handleOnSubmit2(e){
    e.preventDefault()
    let r = admins.filter(r => r._id===input.id)
    console.log('r',r)
    if(r.length === 1 && r[0].pass === input.pass){
      console.log('bien')
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
      <div>
        {admins?.length? 'Hello, please enter user and password': 'Hello, Welcom to Console.Game, please register an administrator'}
        <form onSubmit={handleOnSubmit1} >
          <div>
            <label>Enter an user id:</label>
            <input type='text' name='id' onChange={handleOnChange} value={input.id} />
            {input.id.length < 5? <label>Id is too short</label>: <label>Id OK</label>}
          </div>
          <div>
            <label>Enter a password</label>
            <input type='password' name='pass' onChange={handleOnChange} value={input.pass} />
            {input.pass===input.pass2 && input.pass.length>0? <label>Passwords corrects</label>:''}
          </div>
          <div>
            <label>Enter a password again</label>
            <input type='password' name='pass2' onChange={handleOnChange} value={input.pass2} />
          </div>
          {input.pass===input.pass2 && input.pass.length>5? <input type='submit' value='Send' />:<label>Pasword is too short</label>}
        </form>
      </div>
    )



  if(flag===0)
    return (
      <div>
          <form onSubmit={handleOnSubmit2}>
              <div className='label'>Enter your id admin and password
                  <label>User:</label>
              </div>
              <div>
                  <input type='text' name='id' onChange={handleOnChange} value={input.id} />
              </div>
              <div>
                  <label>Password:</label>
              </div>
              <div>
                  <input type='password' name='pass' onChange={handleOnChange} value={input.pass} />
              </div>
              <div>
                  <input type='submit' value='Send'   />
              </div>
              {flag===1? <div>User or password failed</div>:''}
          </form>
      </div>
    )

}