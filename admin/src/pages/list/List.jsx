import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const List = () => {
  const { admin } = useSelector(state => state)
  const navigate = useNavigate()



  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List