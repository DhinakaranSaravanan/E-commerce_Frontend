import React, { createContext, useEffect, useState } from 'react'
// import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

function getDefaultCart(e){
   let cart = {}
   for (let index = 0; index < 300+1; index++) {
      cart[index] = 0         
   }
   return cart
}

const ShopContextProvider = (props) => {
   const [all_product, setAllProduct] = useState([])
   const[cartItems, setCartItems]=useState(getDefaultCart())

   useEffect(() => {
      fetch('http://localhost:4000/allproduct')
      .then(res => res.json())
      .then(e => setAllProduct(e))   
      
      if(localStorage.getItem('auth-token')){
         fetch('http://localhost:4000/getcartdata',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json'
            },
            body:""
         }).then(res => res.json()).then(e => setCartItems(e))
      }
   },[])

   const getTotalCart = () => {
      let total = 0
      for(const item in cartItems){
         if(cartItems[item]>0){
            total += cartItems[item]
         }
      }
      return total
   }
   const getTotalAmount = () => {
      let totalAmount = 0
      for(const item in cartItems){
         if(cartItems[item]>0){
            let itemInfo = all_product.find((e)=>e.id === Number(item))            
            totalAmount += itemInfo.new_price*cartItems[item]           
         }
      }   
      return totalAmount;   
   }
   const addCart = (e) => {
      setCartItems(pre => ({...pre,[e]:pre[e]+1}))
      if(localStorage.getItem('auth-token')){
         fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json'
            },
            body:JSON.stringify({"e":e})
         }).then(res => res.json()).then(e => console.log(e))
      }
   }
   const removeCart = (e) => {
      setCartItems(pre => ({...pre,[e]:pre[e]-1}))
      if(localStorage.getItem('auth-token')){
         fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json'
            },
            body:JSON.stringify({"e":e})
         }).then(res => res.json()).then(e => console.log(e))
      }
   }
  
   const contextValue = {getTotalAmount, getTotalCart, all_product, cartItems, addCart, removeCart}
     
   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   )
} 

export default ShopContextProvider;