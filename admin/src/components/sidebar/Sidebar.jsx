import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect } from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import logo from '../../images/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { GET_ADMIN } from "../../redux/action/const";
import { getSells } from "../../redux/action";
import { useSelect } from "@mui/base";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);
  const dispatch2 = useDispatch()
  const { sells } = useSelector(state => state)

  useEffect(() => {
    dispatch2(getSells())
    return () => dispatch2({
      type: GET_ADMIN,
      payload: {}  
    })
  },[]) 
  let notified = sells.filter(r => !r.notified)  

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} alt='Console.Games' className="image"/>
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <li>
          <Link to='/home' style={{ textDecoration: "none" }} >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
          </Link>
            </li>
          <p className="title">LISTS</p>
            <li>
          <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
          </Link>
            </li>
            <li>
          <Link to="/postproducts" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>Post products</span>
          </Link>
            </li>
            <li>
          <Link to='/products' style={{ textDecoration: "none" }}>
              <ComputerIcon className="icon" />
              <span>Products</span>
          </Link>
            </li>
            <li>
          <Link to='/addadmin' style={{ textDecoration: "none" }}>
              <SupervisorAccountIcon className="icon" />
              <span>Add Admin</span>
          </Link>
            </li>
          <p className="title">USEFUL</p>
          <li>
          <Link to ="/sells" style={{ textDecoration: "none" }}>
            <InsertChartIcon className="icon" />
            <span>Sells</span>
          </Link>
          </li>

          <li className="item">
            {notified.length && <Link to='/notified' style={{textDecoration: "none"}} >
              <NotificationsNoneIcon className="icon" />
              {notified.length?<span style={{color: "red"}}>Notifications {notified.length}</span>:<span style={{color: "green"}}>No notifications</span>}
            </Link>}
          </li>
          <p className="title">SERVICE</p>
            <li>
          <Link to='/restore' style={{ textDecoration: "none" }}>
              <RestorePageIcon className="icon" />
              <span>Restore deleted products</span>
          </Link>
            </li>
{/*           <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
 {/*          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
  {/*         <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
            <li>
          <Link to='/' style={{ textDecoration: "none" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
          </Link>
            </li>
        </ul>
      </div>
      <div className="bottom">
{/*         <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div> */}
{/*         <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
