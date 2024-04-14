import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
   const {product} = props
   const{addCart} = useContext(ShopContext)
  return (
    <div className='pdisplay'>
      <div className='pdisplay-left'>
         <div className='pdisplay-img-list'>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
         </div>
         <div className='pdisplay-img'>
            <img className='pdisplay-main-img' src={product.image} alt=''/>
         </div>
      </div>
      <div className='pdisplay-right'>
         <h1>{product.name}</h1>
         <div className='pdisplay-right-stars'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(21)</p>
         </div>
         <div className='pdisplay-right-prices'>
            <div className='pdisplay-right-price-old'>
               ${product.old_price}
            </div>
            <div className='pdisplay-right-price-new'>
               ${product.new_price}
            </div>
         </div>
         <div className='pdisplay-right-description'>
            hello, Angles are also formed by the intersection of two planes; these are called dihedral angles. Two intersecting curves may also define an angle, which is the angle of the rays lying tangent to the respective curves at their point of intersection.
         </div> 
         <div className='pdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='pdisplay-right-sizes'>
               <div>S</div>
               <div>M</div>
               <div>L</div>
               <div>XL</div>
               <div>XXL</div>
            </div>
            <button onClick={() => {addCart(product.id)}}>ADD TO CART</button>
            <p className='pdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='pdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
         </div>
      </div>

    </div>
  )
}

export default ProductDisplay