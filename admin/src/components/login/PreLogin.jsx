import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmins } from '../../redux/action'
import Login from './Login'
import './PreLogin.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

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
            <div className='containerMainLogin'>
                <div className='mainLogin'>
                   <form onSubmit={handleOnSubmit} className='formLogin'>
                        <h1>Pre Login</h1>
                        <div className='itemLogin'>
                            <label>User:</label>
                            <input placeholder='Type the admin'  type='text' name='user' onChange={handleOnChange} value={input.user}/>        
                       </div>
                       <div className='itemLogin'>
                           <label>Password:</label>
                           <input placeholder='Type the password' type='password' name='pass' onChange={handleOnChange} value={input.pass} />
                       </div>
                        <button type='submit' className='buttonLogin'>Login</button>
                        {flag===1? <div className='error'>User or password failed</div>:''}
                    </form>
                </div>
            </div>
        )
    if(flag===2)
            return (<Login  />)
}
