import { useState } from "react"
import { postAdmin } from "../../redux/action"
import { useDispatch } from 'react-redux'
 
export default function SaveAdmin(props) {
    let { name, mail, id, image } = props
    const dispatch = useDispatch()
   
    const [ admin, setAdmin ] = useState({
        _id: id,
        image: image,
        name: name,
        mail: mail,
        phone: "",
        city: "",
        country: "",
        address: "" ,
        admin: true
})

function handleChange(e) {
    setAdmin({...admin, [e.target.name]: e.target.value})
   // console.log(admin)
}

function handleSubmit(e){
    e.preventDefault()
    console.log('handle')
   postAdmin(admin)
}

if(name)
    return (
        <div>
            <h1>Complete sus datos personales</h1>
            <form onSubmit={handleSubmit}>
                {image? <img src={image} alt='not found' />:''}
                <br></br>
                <label>Nombre: {name}</label>
                <br></br>
                <label>Mail: {mail}</label>
                <br></br>
                <label>Telefono: </label>
                <input type='text' name='phone' onChange={handleChange} value={admin.phone}   />
                <br></br>
                <label>Pais: </label>
                <input type='text' name='country' onChange={handleChange} value={admin.country}    />
                <br></br>
                <label>Ciudad: </label>
                <input type='text' name='city' onChange={handleChange} value={admin.city}  />
                <br></br>
                <label>Direccion: </label>
                <input type='text' name='address' onChange={handleChange} value={admin.address} />
                <br></br>
                <input type='submit' value='Enviar'/>
            </form>

            <div>{admin.phone}{admin.country}{admin.city}{admin.address}</div>
        </div>
    )
    else{
        return <div></div>
    }

}