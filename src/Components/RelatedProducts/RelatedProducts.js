import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className='rps-item'>
         {data_product.map(e => {
            return <Item key={e.id} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
         })}
      </div>
    </div>
  )
}

export default RelatedProducts