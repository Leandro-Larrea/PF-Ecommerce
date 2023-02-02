import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './notified.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Wid from './Wid'
import { Sells } from '../sells/Sells'
import { getSells } from '../../redux/action'



export const Notified = () => {
  let { sells } = useSelector(state => state)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getSells())
  }, [])
  let notified = sells.filter(r => !r.notified)

  return (
    <div>
          {notified.length && <Sells sell={notified} /> }
    </div>
  )
}