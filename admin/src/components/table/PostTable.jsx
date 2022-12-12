import './table.scss'
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
import { deleteProduct, getProduct, restoreProduct } from "../../redux/action";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestorePageIcon from '@mui/icons-material/RestorePage';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // icono para usuario
import { useState } from "react";

export const PostTable = (props) => {
    const { products, isProduct } = props
    const dispatch = useDispatch()
    
    
    function handleOnDelete(e, id){
        dispatch(deleteProduct(id))
        console.log('target ', id)
      }

    function handleOnRestore(e, id){
        dispatch(restoreProduct(id))
    }

  return (
        <div>
          <div className="listContainer">
            <div className="listTitle">Products Table</div>
          
          </div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Image</TableCell>
                <TableCell className="productCell">Product</TableCell>
                <TableCell className="tableCell">Cost</TableCell>
                <TableCell className="tableCell">Price</TableCell>
                <TableCell className="tableCell">Sales</TableCell>
                <TableCell className="tableCell">Rating</TableCell>
                <TableCell className="tableCell">Stock</TableCell>
                <TableCell className="tableCell">{isProduct? 'Delete' : 'Restore'}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((r) => (
                <TableRow key={products._id}>
                        <div className="cellWrapper">
                          <img src={r.image} alt="" className="image" />
                        </div>
                    <TableCell className="productCell">{r.title.slice(0, 50)}</TableCell>
                    <TableCell className="tableCell">{(r.price * 0.5)}</TableCell>
                    <TableCell className="tableCell">{r.price}</TableCell>
                    <TableCell className="tableCell">{r.sales}</TableCell>
                    <TableCell className="tableCell">{r.rating? r.rating.rating: ''}</TableCell>
                    <TableCell className="tableCell">
                        <span className={`status ${r.stock}`}>{isProduct? r.stock : '0'}</span>
                    </TableCell>
                    {isProduct? 
                        <TableCell className="tableCell">
                            <Link style={{textDecoration: "none"}}>
                                <DeleteForeverIcon onClick={(e) => handleOnDelete(e, r._id)}/>
                             </Link>
                        </TableCell> 
                        :<TableCell className="tableCell">
                            <Link style={{textDecoration: "none"}}>
                                <RestorePageIcon onClick={(e) => handleOnRestore(e, r._id)} />
                            </Link>
                        </TableCell>
                    }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      )
}
