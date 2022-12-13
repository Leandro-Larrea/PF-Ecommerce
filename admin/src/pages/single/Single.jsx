import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserReviews, getUsers } from "../../redux/action";
import { GET_USER } from "../../redux/action/const";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Widget from "../../components/widget/Widget";

const Single = () => {
  let id = useParams()
  const { user, userReviews, userPayments }= useSelector(state => state)
  
  const dispatch = useDispatch()
  //console.log('reviews de single ', user.reviews)

  useEffect(() => {
    dispatch(getUsers(id.userId))
    dispatch(getUserReviews(id.userId))
/*     return () => dispatch({
      type: GET_USER,
      payload: {}
    })   */
  },[])
  
  useEffect(() => {
    console.log('usuario: ', userPayments)

  }, [dispatch])


  if(!user)
  return (<div>Cargando</div>)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
       
            <h1 className="title">Information</h1>
            <div className="item">
{/*               <img
                src={user.img}
                alt=""
                className="itemImg"
              /> */}
              {/* <AccountCircleIcon className="itemImg" /> */}
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {user.location.address} {user.location.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user.location.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Reviews from {user.name}</h1>
        <div>
          {userReviews.length? userReviews.map((r, i) => (<Widget key={i} type='user' review={r.review} image={r.image} title={r.title} rating={r.rating} />)) : ''}
          

          
        </div>
        <h1 className="title">Last Transactions</h1>
          <List/> 
        </div>
      </div>
    </div>
  );
};

export default Single;
