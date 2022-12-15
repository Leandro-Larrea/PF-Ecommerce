import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react'

const Home = () => {

  const admin = useSelector(state => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
    if(!admin) 
      navigate('/')},[])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

{/*         <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
         {/*  <Featured /> */}
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} className='cuadro'/>
        </div>
        <div className="listContainer">
          <div className="listTitle"></div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
