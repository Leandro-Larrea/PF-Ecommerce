import { useState } from 'react'
import Login from '../Login'
import { useSelector } from 'react-redux'

export const PreviusLogin = () => {

    const { user, pass } = useSelector(state => state.previusLogin)

    const [ input, setInput ] = useState({
        user: '',
        pass: ''
    })

    const [ log, setLog ] = useState(false)

    function handleOnChange(e){
        setInput({
            ...input,
        [e.target.name]: e.target.value
    })
    }

    function handleOnSubmit(e){
        if(input.user===user && input.pass===pass){
            setLog(true)
        }
        else{
            setLog(false)
            alert('usuario o contraseñas incorrectas')
            setInput({
                user: '',
                pass: ''
            })
        }
    }

    if(log)
        return (<Login />)

    return (<div>PreviusLogin
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>User:</label>
                    </div>
                    <div>
                        <input type='text' name='user' value={input.name} onChange={handleOnChange}/>
                    </div>
                    <div>
                        <label>Pasword:</label>
                    </div>
                    <div>
                        <input type='password' name='pass' value={input.value} onChange={handleOnChange} />
                    </div>
                    <div>
                        <input type='submit' value='send' />
                    </div>
                </form>
            </div>
        )
}
