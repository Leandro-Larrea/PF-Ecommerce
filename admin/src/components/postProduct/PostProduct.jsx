import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postProduct } from '../../redux/action';
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './postProduct.scss'

export const PostProduct = () => {

  const dispatch = useDispatch();
  const [ file, setFile ] = useState('')


  // aca me traigo el estado de las categorias ej: state => state.allCategories
  const categories = useSelector(state => state.categories)
  const [input, setInput] = useState({
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
      stock: ''
  })

  useEffect(() => {
      dispatch(getCategories()) //me traigo las categorias para despues poder seleccionarlas
  }, [dispatch])

  useEffect(async () => {
    
}, [input])


  const [errors, setErrors] = useState({})

  function validate(input) {
      let errors = {};
      if (!input.title) errors.title = "Enter title"
      if (!input.price) errors.price = "Enter price"
      if (!input.description) errors.description = "Enter description"
      if (!input.category) errors.category = "Enter category"
      if (!input.image) errors.title = "Enter Image"
      if (!input.stock) errors.title = "Enter Stock"

      return errors;
  }



  function handleFileInputChange(e) {
    let array = e.target.value.slice(0,4)
    let a 
    if(array !== 'http'){
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]) 
      reader.onloadend =  () => {
        setInput({...input, image: reader.result})
      } 
    }    
  }

  function handleChange(e){
    if(e.target.name === 'stock')
      setInput({...input, [e.target.name]: parseInt(e.target.value)})
    else
      setInput({...input, [e.target.name]: e.target.value})
  }


  async function handleSubmit(e){
    e.preventDefault()
    /*     if (!input.title || !input.price || !input.description || !input.category || !input.image.length || !input.stock) {
      alert('Completar todos los campos')
    } else { */
    console.log('lleno el input', input)
    let res = await dispatch(postProduct(input));
    console.log('listorti: ', res)
    alert('Producto Creado 👍 ')
    setInput({
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
      stock: ''
    })
    console.log('input: ', input)

  
    
    console.log('enviando formulario', input.image)
  }

  return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className='main'>PostProduct
            <form onSubmit={handleSubmit} className="form">
              <div className='itemContainer'>
                <label classname="label">Product: </label>
                <input classname="inputI" type='text' name='title' onChange={handleChange} value={input.title}/>
              </div>
              <div className='itemContainer'>
                <label classname="label">Price:</label>
                <input classname="inputI" type='number' name='price' onChange={handleChange} value={input.price} />
              </div>
              <div className='itemContainer'>
                <label classname="label">Stock:</label>
                <input classname="inputI" type='number' name='stock' onChange={handleChange} value={input.stock}/>
              </div>
              <div className='itemContainer'>
                <label classname="label">Category: </label>
                <select classname="inputI" name='category' onChange={handleChange} id='selectCategory'>
                            <option value=''>Seleccionar</option>
                            {
                            categories.length? categories.map((r, i) => (
                                <option key = {i} value={r.category}>{r.category}</option>
                            )): null}
                </select>
              </div>
              <div className='itemContainer'>
                <label classname="label" for="image">Image:</label>
                <input classname="inputI" type='file' name='image' onChange={handleFileInputChange} />
              </div>
              <div className='itemContainerText'>
                <label classname="label">Description:</label>
                <input classname="inputI" type='textArea' name='description' onChange={handleChange} value={input.description}/>
              </div>
                <input className='button' type='submit' value='Send' />
            </form>
            {input.image && <img src={input.image} alt = '' />}
          </div>
        </div>
      </div>
  )
}


