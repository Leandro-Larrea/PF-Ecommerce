
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSells } from "../../redux/action";
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { Link, useNavigate } from "react-router-dom";

export const SingleTable = (props)=>{
 let sells = []
 props.sells.map(r => {
    sells.push({
        date: r.updatedAt,
        totalPrice: r.totalPrice,
        products: r.products,
        amount: r.products.length,
        _id: r._id

    })
 })
 
  
const dispatch = useDispatch()


const { admin } = useSelector(state => state)

const navigate = useNavigate()

useEffect(() => {
  if(!admin) 
  navigate('/')},[])

console.log('asdfasdfasdfasdfasd', sells)

if(sells.length)
    return(
    <div>

             <div>
          <div className="listContainer">
            <div className="listTitle">Products Table</div>
          
          </div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Total</TableCell>
                <TableCell className="tableCell">Products</TableCell>
                <TableCell className="tableCell">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sells.length && sells.map((r) => (
                <TableRow key={r._id}>
                    <TableCell className="tableCell">{r.date && r.date.slice(0, 10)}</TableCell>
                    <TableCell className="tableCell">{r.totalPrice}</TableCell>
                    <TableCell className="tableCell">{r.products.length}</TableCell>
                    <TableCell className="tableCell">
                        <Link to={`/sells/${r._id}`}>
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

    )
else (<div></div>)
}