import React from 'react'
import girl from '../images/Layer-1.png'
import partner1 from '../images/logo1.png'
import partner2 from '../images/logo2.png'
import partner3 from '../images/logo3.png'
import partner4 from '../images/logo4.png'
import partner5 from '../images/logo5.png'
// import user from '../assets/Vector.svg'
// import management from '../assets/fluent_target.svg'
// import operator from '../assets/headset.svg'


const Home = () => {
  return (
    <>
    <header className='header'>
      <div className="head-text" data-aos="fade-right">
        <h1><span>İdman zalı axtarırsınız,</span><br />amma bilmirsiniz harada?</h1>
        <p>Onda sizə StartPoint yardımçı olacaq.</p>
      </div>
      <div className="head-photo" data-aos="fade-left">
        <img src={girl} alt="young girl" /> 
      </div>
    </header>

<div className="partners-center">
    <div className="partner">
      <div className="slide">
      <img src={partner1} alt="partner" />
      </div>

      <div className="slide">
      <img src={partner2} alt="partner" />
      </div>

      <div className="slide">
      <img src={partner3} alt="partner" />
      </div>
      <div className="slide">
      <img src={partner4} alt="partner" />
      </div>
      <div className="slide">
      <img src={partner5} alt="partner" />
      </div>
    </div>
    </div>

    <section className='advantages'>
    <h2> <span> StartPoint </span>  üstünlükləri ilə biznesinizi gücləndirin</h2>

    <div className="benefits">
      <div className="user benefit">
      <i class="fa-solid fa-user-group"></i>
      <h4>İstifadəçi interfeysi</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
      </div>
      </div> 

      <div className="management benefit">
      <i class="fa-solid fa-bullseye"></i>
      <h4>İdarəetmə paneli</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
      </div>
      </div>

      <div className="operator benefit">
      <i class="fa-solid fa-headset"></i>
      <h4>Operator üstünlükləri</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
        <div className="adv-text">
        <i class="fa-solid fa-circle-check"></i>
        <p>Lorem ipsum dolor sit amet, consecteturr nulla tempus. </p>
        </div>
      </div>
      </div>
    </div>
    </section>
    
    <seection className="gym">
      
    </seection>
    </>
  )
}

export default Home


