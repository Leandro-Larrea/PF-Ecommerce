import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from '../../images/admin.jpg'
import { postAdmin } from "../../redux/action";


const New = ({ inputs, title }) => {
  const dispatch = useDispatch()

  const [ input, setInput ] = useState({
    id: '',
    pass: ''
  })

  function handleOnChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log('asdf', input.id, input.pass)
  }

  function handleOnClick(e){
    e.preventDefault()
    console.log('asdf')
    dispatch(postAdmin(input))
    alert('Administrator registered')
  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput">
                <label>Id Administrator:</label>
                <input type='text' name='id' onChange={handleOnChange} value={input.id} />
                <label>Password:</label>
                <input type='password' name='pass' onChange={handleOnChange} value={input.pass} />
              
              </div>
              <div className="left">
            <img src={img}  alt="" className="img"/>
          </div>
            </form>
            {input.id.length < 5? <div className='labelError1'>Id is too short</div>: <div className='labelCorrect1'>Id OK</div>}
             {input.pass.length > 5 && input.id.length>4? <button className='boton1' onClick={handleOnClick}>Send</button>:''} 
           
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
