import React from 'react'
import { useSelector } from 'react-redux'

export const MostSales = () => {

    let products = useSelector(state => state.products)

    console.log('productos', products)

  return (
    <div>MostSales</div>
  )
}
