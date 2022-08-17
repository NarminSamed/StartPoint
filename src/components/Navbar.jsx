
import logo from '../startpoint.png'
import flag from '../assets/azflag.svg'
import {Link, Outlet} from 'react-router-dom'

import React, { useState } from 'react'


const Navbar = () => {

const [isMobile, setIsMobile] = useState (false)

const options = [
  {value: 'Azerbaijan', text: 'Az'},
  {value: 'English', text: 'Eng'},
  {value: 'Russia', text: 'Rus'},
];

const [selected, setSelected] = useState(options[0].value);

const handleChange = event => {
  setSelected(event.target.value);
};


  
  return (
<>

{/* <div class="overlay"> */}
       
{/* 
        <div class="overlay-content">

<div className="menu-icons" onClick={this.handleClick}>
  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
</div>
          
           <ul>
            {menuItems.map((item, index) => {
              return(
                <li key={index}>
                  <a className={item.cname} href ={item.url}>
                    {item.title}
                  </a>
                </li>
              )

            })}

           </ul>
        </div>

    </div> */}


    <nav className='navbar'>
      <div className="nav-container">

        <Link to='/'><img src={logo} alt="StartPoint.png" className="logo" /></Link>
        
        <div className="nav-link-left">
         
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
          >
            <li><Link to='/about' className='nav-item line'>Haqqımızda</Link></li>
            <li><Link to='/gym' className='nav-item line'>İdman zalları</Link></li>
            <li><Link to='/pricing' className='nav-item line'>Qiymət</Link></li>
            <li><Link to='/contact' className='nav-item line'>Əlaqə</Link></li>
            <li><Link to='/contact' className='nav-item line'>Əlaqə</Link></li>
            {/* <li className="none"><i class="fa-solid fa-bars openSideNav"></i></li> */}
          </ul>
         
          <i class="fa-solid fa-magnifying-glass"></i>
         
        </div>

        <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
           {isMobile ?  <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i> } 
            </button>

        <div className="nav-link-right">
        <Link to='/login' className='login-btn'>Giriş</Link>
        <button>Qeydiyyat</button>
        {/* <div className="nav-lang">
          <img src={flag} alt="AZ-flag" />
          <span>AZ</span>
          <i className="fa-solid fa-angle-down"></i>
        </div> */}

<div>
      <select className='nav-lang' value={selected} onChange={handleChange}>
        {options.map(option => (
          <option className='lang_option' key={option.value} value={option.value}>
            {option.text} 
          </option>
        ))}
      </select>
    </div>

        </div>

      </div> 
    </nav>
    </>
  )
}

export default Navbar