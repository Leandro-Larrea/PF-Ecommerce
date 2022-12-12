import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBackup, getProduct } from "../../redux/action";
import { GET_BACKUP, GET_PRODUCTS } from '../../redux/action/const'

const Navbar = (props) => {
  //const { dispatch } = useContext(DarkModeContext);
  let { products } = useSelector(state => state)
  let deleted = useSelector(state => state.productsBackup)
  const dispatch = useDispatch()
  
  const searchRef = useRef(null)

  async function handleOnClick(e){
      let response = []
      console.log('target ', searchRef.current.value)
    if(!props.isDeleted){
      products.filter(r => { 
        if(r.title.toLowerCase().includes(searchRef.current.value.toLowerCase()))
          response.push(r)
      })
      if(response.length){
        dispatch({
          type: GET_PRODUCTS,
          payload: response 
        })
      }
      else alert('Sin coincidencias')
    }
    else{
        deleted.filter(r => { 
        if(r.title.toLowerCase().includes(searchRef.current.value.toLowerCase()))
          response.push(r)
      })
      if(response.length){
        dispatch({
          type: GET_BACKUP,
          payload: response 
        })
      }
      else alert('Sin coincidencias')
      searchRef.current.value = ''
    }
  }

  function onRefresh(e){
    dispatch(getProduct())
    dispatch(getBackup())
  }


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input ref={searchRef} type="text" placeholder="Search product..."  />
            <SearchOutlinedIcon onClick={handleOnClick} style={{cursor: "pointer"}} />
            <button onClick={onRefresh}>Refresh</button>
        </div>
        <div className="items">
          <div className="item">
{/*             <LanguageOutlinedIcon className="icon" />
            English */}
          </div>
{/*           <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
{/*           <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <SupervisorAccountIcon className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
