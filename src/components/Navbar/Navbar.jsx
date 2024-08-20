import React from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../slices/userSlice'

const Navbar = () => {
    const user=useSelector((state) => state.userInfo.user);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const logout=()=>{
      dispatch(removeUser());
    }
    navigate("/")
  return (
    <nav>
        <h1>Kavin js</h1>
        <ul>
           {!user && (
            <Link to="/login">
           <li>Login</li>
           </Link>
        )}
            {user && (
            <>
            <Link to="/settings">
            <li>Settings</li>
            </Link>
            <li onClick={logout}>Logout</li>
            </>
            )}
           
        </ul>
    </nav>
  )
}

export default Navbar