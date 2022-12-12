import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './restoreProducts.scss'
import List from '../table/Table'
import { getBackup } from '../../redux/action'
import { PostTable } from '../table/PostTable'

export const RestoreProducts = () => {
    console.log('restore')
    const dispatch = useDispatch()
    const deletedProducts = useSelector(state => state.productsBackup)

    useEffect(() => {
        dispatch(getBackup())
    }, [])
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar isDeleted={true}/>
            {deletedProducts.length? <PostTable products={deletedProducts} isProduct={false} /> : 'Cargando'}
        </div>
    </div>
  )
}
