import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProduct } from "../../redux/action";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestorePageIcon from '@mui/icons-material/RestorePage';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // icono para usuario
import { useState } from "react";
import { PostTable } from "./PostTable";


///LISTA DE PRODUCTOS
const List = () => {

const [ del, setDel ] = useState('')

const dispatch = useDispatch()
let products = useSelector(state => state.products)


useEffect(() => {
  dispatch(getProduct())
 }, [])   

 function handleOnDelete(e, id){
   dispatch(deleteProduct(id))
   console.log('target ', id)
 }

console.log('productos ', products)
if(!products){
  return (<div>Cargando</div>)
  }
else{ 
  return (<PostTable products={products} isProduct={true} />)
          }

};

export default List;


