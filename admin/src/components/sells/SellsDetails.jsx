import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { cleanUp, getSellDetails, putNotified } from "../../redux/action"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import '../table/table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../widget/widget.scss";


export const SellsDetail = ()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    
    const details = useSelector(state => state.sellDetails)

useEffect(()=>{
dispatch(getSellDetails(id))
dispatch(putNotified(id))
return () => {
    dispatch(cleanUp("sellDetails"))
}
},[])
if(details){
return(
    <div >
        <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar/>
        <div>
            <div className="userDetails">
                <div className="client">
                    <p  className="text">The user <NavLink className="link" to={`/users/${details.user._id}`}>
                        {details.user.name} {details.user.lastName}</NavLink> has bought :</p>
                    <p className="text"> </p>
                    <p className="text"></p>
                </div>
            </div>
        {Object.keys(details).length?details.products.map(e=>      
        <div className="sellDetails">
            <div className="widget">
               <div className="left">
                    <span className="title">
                        {e.title}
                    </span>
                    <span className="review">
                    ${e.subTotal}
                    </span>
                    {/* <Link to='/products' style={{textDecoration: "none"}}>
                        <span className="link">{data.link}</span>
                    </Link> */}
                </div>
               <div className="right">
                    <div className="percentage positive">
                    ${e.price} x{e.quantity} 
                    </div>
                    <img src={e.image} alt='' className="image"/>
               </div>
            </div>
            <div>
                
            </div>
        </div>

        )
     
     :<div>cargando</div>}
     <div className="client">
        <h2 >total: ${details.totalPrice}</h2>
     </div>
                    </div>
                </div>
            </div>
   
          </div>
          )
          }
          else{
            return <div>
                        <div className="single">
                            <Sidebar />
                            <div className="singleContainer">
                                <Navbar/>
                            </div>
                        </div>
                    </div>
          }}