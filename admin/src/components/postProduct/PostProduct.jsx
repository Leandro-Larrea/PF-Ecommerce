import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { cleanUp, getCategories, getProductDetail, postProduct, updateProduct } from '../../redux/action';
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './postProduct.scss'

export const PostProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { admin } = useSelector(state => state)

  useEffect(() => {
    if(!admin) 
    navigate('/')},[])
  const [ file, setFile ] = useState('')
  let {id} = useParams()

  let detail = useSelector(state => state.productDetail)

  const initialState = {
    title: '',
    price: '$',
    description: '',
    category: null,
    image: '',
    stock: '',
  }
  const [input, setInput] = useState(initialState)
  
  useEffect(()=>{
    console.log(detail)
    if(!id)setInput(initialState)
    dispatch(getProductDetail(id))
   return ()=> dispatch(cleanUp("productDetail"))
  },[id])

  

  // aca me traigo el estado de las categorias ej: state => state.allCategories
  const categories = useSelector(state => state.categories)

   useEffect(() => {
       dispatch(getCategories()) //me traigo las categorias para despues poder seleccionarlas
       return ()=>{if(id){ 
         setInput(initialState)
         id=null}}
   }, [])

    useEffect(() => {
      if(id && detail)setInput({...detail, price: "$"+detail.price})
      else {
       setInput(initialState)
      }
  }, [detail])


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
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]) 
      reader.onloadend =  () => {
        setInput({...input, image: reader.result})
      }    
  }

  function handleChange(e){
    let a = e.target.value
    if(e.target.name === 'stock'){
      setInput({...input, [e.target.name]: parseInt(a)})
      return}   
      if(e.target.name === "price" &&  /\d/.test(a) || a === "$"){ 
    setInput({...input, [e.target.name]: a})}
    else if(e.target.name !== "price")
      setInput({...input, [e.target.name]: a})
  }


  async function handleSubmit(e){
    e.preventDefault()
    if (!input.title || !input.price || !input.description || !input.category || !input.image.length || !input.stock) {
      alert('Completar todos los campos')
    } 
    else { 
      let a = {...input, price: parseInt(input.price.slice(1))}
      console.log('lleno el input', a)
      let res = !id? await dispatch(postProduct(a)): await dispatch(updateProduct(id,a));
      console.log('listorti: ', res)
      id? alert("product updated"): alert('Producto Creado 👍 ')
      setInput(
        initialState
    )
    if(id) navigate("/products")
    }
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
                <input classname="inputI" type='text' placeholder='Playstaion' name='title' onChange={handleChange} value={input.title}/>
              </div>
              <div className='itemContainer'>
                <label classname="label">Price:</label>
                <input classname="inputI" type='text' placeholder="00" name='price' onChange={handleChange} value={input.price} />
              </div>
              <div className='itemContainer'>
                <label classname="label">Stock:</label>
                <input classname="inputI" type='number' placeholder="00" name='stock' onChange={handleChange} value={input.stock}/>
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
              <div className='itemContainerText'>
                <label classname="label">Description:</label>
                <textarea classname="inputI" name='description' onChange={handleChange} value={input.description}/>
              </div>
              <div className='itemContainer'>
                <label classname="label" htmlFor="image">Image:</label>
                <input classname="inputI" type='file' name='image' onChange={handleFileInputChange} />
              </div>
              <div className='itemContainer'>
                <label>Image URL</label>
                <input type='text'placeholder='https://...' name='image' onChange={handleChange} />
              </div>
              <div className='image'>
                {input.image && <img src={input.image} alt = '' />}
              </div> 
                <input className='button' type='submit' value='Send' />
              
            </form>
          </div>
        </div>
      </div>
  )
}


