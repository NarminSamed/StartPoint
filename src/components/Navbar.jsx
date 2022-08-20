
import logo from '../startpoint.png'
import flag from '../assets/azflag.svg'
import {Link, Outlet} from 'react-router-dom'

import React, { useState, useRef} from 'react'


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

// yeni cehd
const searchBtn = useRef () 
const closingBtn = useRef ()
const searchForm = useRef()


const formActive = (e) => {
  const kliklenenElement = e.target


  if (kliklenenElement === searchBtn.current) {
    searchBtn.current.classList.remove('fa-magnifying-glass')
    closingBtn.current.style.display='block'
    searchBtn.current.style.display ="block"
    //  searchBtn.current.classList.replace('fa-magnifying-glass','fa-xmark')
     searchForm.current.classList.add('js-active')
  }
}

 const closingInput = (e)=> { 
  const kliklenenElement = e.target


  if(kliklenenElement === closingBtn.current) {
    searchForm.current.classList.remove('js-active')
    closingBtn.current.style.display='none'
    searchBtn.current.classList.add('fa-magnifying-glass')
    searchBtn.current.style.display='block'
  }
 }



  
  return (
<>
    <nav className='navbar'>

      <div className="nav-container">

        <Link to='/'><img src={logo} alt="StartPoint.png" className="logo" /></Link>

  
        <div className={isMobile ? "nav-links-mobile" : "nav-link-left"}
        onClick={() => setIsMobile(false)} > 
         
       
          {/* <ul className='main-menu_list'> */}
        <ul className='nav-links'>
            <li><Link to='/about' className='main-menu_item line'>Haqqımızda</Link></li>
            <li><Link to='/gym' className='main-menu_item line'>İdman zalları</Link></li>
            <li><Link to='/pricing' className='main-menu_item line'>Qiymət</Link></li>
            <li><Link to='/contact' className='main-menu_item line'>Əlaqə</Link></li>
          </ul>

       {/* yeni cehd */}

      <div className="navbar-search">
        <button type='button' className="nav_search__toggle" onClick={formActive}>
          <i  className="fa-solid fa-magnifying-glass search_icon" ref={searchBtn}></i>
          <i class="fa-solid fa-xmark" ref={closingBtn} onClick={closingInput}></i>
        </button>
      <div className="search_form" ref={searchForm}>
        <form className='form-search_inner' action="/">
          <input type="search" className='search-input' placeholder='Axtar...'/>
          <button type='submit' className='search-submit'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      </div>

        </div>


        <div className="nav-link-right">
        <Link to='/login' className='login-btn'>Giriş</Link>
        <button type='button'>Qeydiyyat</button>
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

       

        <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
           {isMobile ?  <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i> } 
            </button>


        {/* <button type='button' className={isMobile ?  <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i> } onClick={() => setIsMobile(!isMobile)}> */}
           {/* {isMobile ?  <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i> }  */}
            



            {/* <span className="burger-inner">
              <span className="burger-line">

              </span>
            </span>
              */}
            {/* </button> */}

            
      </div> 
    </nav>
    </>
  )
}

export default Navbar