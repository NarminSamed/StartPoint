import React from 'react'
import logo from '../startpoint.png'
import flag from '../assets/azflag.svg'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-container">
        <Link to='/'><img src={logo} alt="StartPoint.png" className="logo" /></Link>
        
        <div className="nav-link-left">
          <ul>
            <li><Link to='/about' className='nav-item line'>Haqqımızda</Link></li>
            <li><Link to='/gym' className='nav-item line'>İdman zalları</Link></li>
            <li><Link to='/pricing' className='nav-item line'>Qiymət</Link></li>
            <li><Link to='/contact' className='nav-item line'>Əlaqə</Link></li>
          </ul>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="nav-link-right">
        <Link to='/login' className='login-btn'>Giriş</Link>
        <button>Qeydiyyat</button>
        <div className="nav-lang">
          <img src={flag} alt="AZ-flag" />
          <span>AZ</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        </div>

      </div>
        
    </nav>
  )
}

export default Navbar