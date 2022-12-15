import "./table.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProduct } from "../../redux/action";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PostTable } from "./PostTable";


///LISTA DE PRODUCTOS
const List = () => {

const [ del, setDel ] = useState('')

const dispatch = useDispatch()
let products = useSelector(state => state.products)

console.log('todos los productos: ', products)


useEffect(() => {
  dispatch(getProduct())
 }, [])   

 function handleOnDelete(e, id){
   dispatch(deleteProduct(id))
 }

if(!products){
  return (<div>Cargando</div>)
  }
else{ 
  return (<PostTable products={products} isProduct={true} />)
          }

};

export default List;


