import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import List from '../table/Table'

export const Products = () => {
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar />
                <div>
                    <List/>
                </div>
        </div> 
    </div>
  )
}
