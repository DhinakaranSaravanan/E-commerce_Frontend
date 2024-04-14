import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
   const{all_product, cartItems, removeCart, getTotalAmount} = useContext(ShopContext)
  return (
    <div className='cart'>
    <div className='cart-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr/>
    {all_product.map(e => {
      if(cartItems[e.id]>0)
      {
         return <div key={e.id}>
            <div className='cart-format cart-format-main'>
               <img src={e.image} className='cart-product-icon' />
               <p>{e.name}</p>
               <p>${e.new_price}</p>
               <button className='cart-quantity'>{cartItems[e.id]}</button>
               <p>${e.new_price*cartItems[e.id]}</p>
               <img className='cart-remove-icon' onClick={() => removeCart(e.id)} src={remove_icon} alt='' />
            </div>
            <hr/>
         </div>
         }
         return null;
    })}
    <div className='cart-down'>
      <div className='cart-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cart-total-item'>
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className='cart-total-item'>
            <h3>Total</h3>
            <h3>${getTotalAmount()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='cart-promocode'>
        <p>If you have a promocode, Enter it here</p>
        <div className='cart-promobox'>
          <input 
            type='text'
            placeholder='Promocode'
          />
          <button>Submit</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default CartItems