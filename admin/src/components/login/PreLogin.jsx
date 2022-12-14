import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmins } from '../../redux/action'
import Login from './Login'

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
          <div>
              <form onSubmit={handleOnSubmit}>
                  <div className='label'>
                      <label>User:</label>
                  </div>
                  <div>
                      <input type='text' name='user' onChange={handleOnChange} value={input.user} />
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
    if(flag===2)
            return (<Login  />)
}
