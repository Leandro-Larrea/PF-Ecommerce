import Navbar from "../navbar/Navbar"
import '../table/table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../sidebar/Sidebar";
import { PostTable } from "../table/PostTable"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSells } from "../../redux/action";
import { Products } from "../products/Products";
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { Link } from "react-router-dom";

export const Sells = ()=>{

const sells = useSelector(state=> state.sells)
const dispatch = useDispatch()
console.log("component", sells)
useEffect(()=>{
    dispatch(getSells())
},[])


    return(<div>
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar isDeleted={true}/>
             <div>
          <div className="listContainer">
            <div className="listTitle">Products Table</div>
          
          </div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">User</TableCell>
                <TableCell className="tableCell">Total</TableCell>
                <TableCell className="tableCell">Products</TableCell>
                <TableCell className="tableCell">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sells.map((r) => (
                <TableRow key={r._id}>
                    <TableCell className="tableCell">{r.userId}</TableCell>
                    <TableCell className="tableCell">{r.totalPrice}</TableCell>
                    <TableCell className="tableCell">{r.products.length}</TableCell>
                    <TableCell className="tableCell">
                        <Link style={{textDecoration: "none", color: "black"}} to={`/sells/${r._id}`}>
                            <RequestPageIcon/> 
                        </Link>
                    </TableCell>
                    
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div> 
            </div>
            </div>
        </div>
    )
}