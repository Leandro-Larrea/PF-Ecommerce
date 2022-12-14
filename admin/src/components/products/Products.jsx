import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import List from '../table/Table'

export const Products = () => {
  const { admin } = useSelector(state => state)
  const navigate = useNavigate()

  useEffect(() => {
    if(!admin) 
    navigate('/')},[])

  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar  />
                <div>
                    <List/>
                </div>
        </div> 
    </div>
  )
}
