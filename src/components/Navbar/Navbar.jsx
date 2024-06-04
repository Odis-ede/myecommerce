
import './Navbar.css'


import cart_icon from '../Assets/shopping-cart.png'
import search_icon from '../Assets/search.png'
import heart_icon from '../Assets/heart.png'
import user_icon from '../Assets/user.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar =() => {

    const [menu,setMenu] = useState("Home")
    return(
        <div className='navbar'>
            <div className="nav-logo">
                <p>Bandage</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("blog")}}><Link style={{ textDecoration: 'none'}} to='/blog'>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("page")}}><Link style={{ textDecoration: 'none'}} to='/page'>Page</Link>{menu==="page"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-register'>
            <img src={user_icon} alt=''/>
            <Link to='/login'><button>Login/Register</button></Link>
            <img src={search_icon} alt=''/>
            <img src={heart_icon} alt=''/>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar