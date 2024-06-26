import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  // console.log(props.category.toLowerCase());
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map(e => {
          if(e.category === props.category){
            return <Item key={e.id} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
          } else{
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More...
      </div>

    </div>
  )
}

export default ShopCategory