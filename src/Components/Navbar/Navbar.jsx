import React, { useContext, useState } from 'react'
import './Navbar.css'
import SearchIcon from '../../assets/search_icon.png'
import CartIcon from '../../assets/cart.jpg'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("Menu");

    const {getTotalCartAmount} = useContext(StoreContext);

    ;

  return (
    <div className='navbar'>
     <Link to='/'> <h1 className='logo'>HICC MEALS</h1></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
        <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu === "Contact-Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img className='search' src={SearchIcon} alt="" />
      <div className="navbar-search-icon">
       <Link to='/cart'><img src={CartIcon} alt="" /></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
