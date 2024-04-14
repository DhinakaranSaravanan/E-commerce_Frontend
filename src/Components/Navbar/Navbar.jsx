import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import drop_down from '../Assets/dropdown_icon.png'

export const Navbar = () => {
   const [menu, setMenu] = useState("Shop")   
   const{getTotalCart} = useContext(ShopContext)
   const menuRef = useRef()
   const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')      
   }
   const handleDelete = () => {
      localStorage.removeItem('auth-token');
      window.location.replace('/')
   }
   return (
   <div className='navbar'>
      <div className='nav-logo'>
         <img src={logo} alt='site logo'/>
         <p>DK SHOP</p>         
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} />      
      <ul ref={menuRef} className='nav-menu'>
         <li onClick={(e) => setMenu(e.target.innerHTML)}>
            <Link style={{textDecoration:'none'}} to={'/'}>Shop</Link>{menu === 'Shop' ? <hr/> : null}
         </li>
         <li onClick={(e) => setMenu(e.target.innerHTML)}>
            <Link style={{textDecoration:'none'}} to={'/mens'}>Men</Link>{menu === 'Men' ? <hr/> : null}
         </li>
         <li onClick={(e) => setMenu(e.target.innerHTML)}>
            <Link style={{textDecoration:'none'}} to={'/womens'}>Women</Link>{menu === 'Women' ? <hr/> : null}
         </li>
         <li onClick={(e) => setMenu(e.target.innerHTML)}>
            <Link style={{textDecoration:'none'}} to={'/kids'}>Kids</Link>{menu === 'Kids' ? <hr/> : null}
         </li>
      </ul>
      <div className='nav-login-cart'>
         {localStorage.getItem('auth-token') ? <button onClick={handleDelete}>logout</button> : <Link to={'/login'}><button>login</button></Link> }
         <Link to={'/cart'}><img className='nav-login-cart-img' src={cart_icon} alt='cart' /></Link>
         <nav className='nav-cart-count'>{getTotalCart()}</nav>
      </div>
   
   </div>
  )
}
