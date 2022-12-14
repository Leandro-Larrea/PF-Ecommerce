import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './restoreProducts.scss'
import List from '../table/Table'
import { getBackup } from '../../redux/action'
import { PostTable } from '../table/PostTable'
import { useNavigate } from 'react-router-dom'

export const RestoreProducts = () => {
  const { admin } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()


    const deletedProducts = useSelector(state => state.productsBackup)

    useEffect(() => {
      if(!admin) 
        navigate('/')},[])

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
