import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../slices/userSlice'

const Login = () => {

 const dispatch= useDispatch()

const navigate=useNavigate();

  const login = () =>{
    dispatch(
      setUser({
      name:"kavin",
      email:"kavin@gmail.com"
    })
  )
}
  navigate("/")
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login