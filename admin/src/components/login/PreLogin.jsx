import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmins } from '../../redux/action'
import Login from './Login'
import './PreLogin.scss'

export const PreLogin = () => {

    const dispatch = useDispatch()

      

    useEffect(() => {
        dispatch(getAdmins())
      },[])

    const { user_pass } = useSelector(state => state)

    const [ flag, setFlag ] = useState(0)
    
    const [ input, setInput ] = useState({
        user: '',
        pass: ''
    }
    )

    function handleOnChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleOnSubmit(e){
        e.preventDefault()
        if(input.user===user_pass.user && input.pass===user_pass.pass){
            setFlag(2)
        }
        else{
            setFlag(1)
            setInput({
                user: '',
                pass: ''
            })
        }
    }
    if(flag=== 0 || flag === 1)
        return (
          <div className='indice'>
              <form onSubmit={handleOnSubmit} className='formulario'>
                  <div >
                      <label className='etiqueta'>User:</label>
                  </div>
                  <div>
                      <input autoFocus type='text' name='user' onChange={handleOnChange} value={input.user} className='input1' />
                  </div>
                  <div>
                      <label className='etiqueta'>Password:</label>
                  </div>
                  <div>
                      <input type='password' name='pass' onChange={handleOnChange} value={input.pass} className='input'/>
                  </div>
                  <div>
                      <input type='submit' value='Send' className='boton'  />
                  </div >
                  {flag===1? <div className='error'>User or password failed</div>:''}
              </form>
          </div>
        )
    if(flag===2)
            return (<Login  />)
}
