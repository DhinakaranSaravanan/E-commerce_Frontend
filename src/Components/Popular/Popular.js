import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  const [data_product, setDataProduct] = useState([])
  useEffect(() => {
    fetch('https://dkshop-ecommerceapi.onrender.com/popularinwomen').then(res => res.json()).then(e => setDataProduct(e))
  },[])
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='popular-item'>
         {data_product.map(e => {
            return <Item key={e.id} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
         })}
      </div>

    </div>
  )
}

export default Popular