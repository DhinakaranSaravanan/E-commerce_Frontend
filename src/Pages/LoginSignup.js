import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up")
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const signup = async () => {    
    let res = await fetch('https://dkshop-ecommerceapi.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    let data = await res.json()
    if(data.success){
      localStorage.setItem('auth-token',data.token);
      window.location.replace('/')
    }else{
      alert(data.errors)
    }
  }
  const login = async () => {
    let res = await fetch('https://dkshop-ecommerceapi.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json()
    if(data.success){
      localStorage.setItem('auth-token',data.token);
      window.location.replace('/')
    }else{
      alert(data.errors)
    }    
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>{state}</h1>
        <div className='login-fields'>
        {state==="Sign Up" ? <input 
            type='text'
            placeholder='Enter Your Name'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />: null }
          <input 
            type='email'
            placeholder='Enter Your E-mail'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type='password'
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => {state==="Sign Up" ? signup() : login()}}>Continue</button>
        {state==="Sign Up" ? <p className='login-login'>Already have an account? <span onClick={() => {setState("Login")}} >Login here</span></p> :
        <p className='login-login'>Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p> }
        <div className='login-agree'>
          <input 
            type='checkbox'
            name=''
            id=''
          /> 
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup