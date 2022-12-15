import React from 'react'

import appStore from '../assets/app-store.svg'
import playMarket from '../assets/play-market.svg'
import video from '../images/video.MP4'

import AOS from "aos";
import "aos/dist/aos.css";

const OperatorPanel = () => {

  AOS.init();

  return (
    <>

    <div className="operator-panel_hero">
      <div className="operator-panel_body">
        <h1>Operator üstünlükləri</h1>
      </div>
    </div>
    
    <div className="operator-panel_sections">

      <div className="operator-web-section">
        
            <div className="__description">
                <h3>Operator paneli <br /> <span> veb tətbiqində</span></h3>
            </div>

            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667640090/Mask_group_1_qqlqnd.png" alt="operator panel" />
            </div>
          
      </div>

      <div className="operator-web_advantages">
        <div className="operator-panel_advantage">
        <i className="fa-solid fa-address-card"></i>
            <h4>Abunəliklərin izlənilməsi</h4>
            <p>Müddətli və ya müddətsiz endirim kampaniyaları yarat və kampaniyanın effektivliyini izlə.</p>
        </div>

        <div className="operator-panel_advantage">
        <i className="fa-solid fa-person-walking"></i>
            <h4>Gedişlərin izlənilməsi</h4>
            <p>İstənilən zaman aralığında ətraflı olaraq satışlar və gəlirlər barədə hesabatlara bax</p>
        </div>

        <div className="operator-panel_advantage">
        <i className="fa-solid fa-money-bill"></i>
            <h4>Nağd ödəniş</h4>
            <p>Müddətli və ya müddətsivə kampa.</p>
        </div>
      </div>

      <div className="operator-mobil-section">
            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667640047/Mask_group_yo5vq9.png" alt="operator panel" />
            </div>

            <div className="__description">
                <h3>Operator paneli <br /> <span> mobil app</span></h3>
                <p>QR oxuma;</p>
                <p>Müştəri qəbulu;</p>
                <p>Gediş tarixçəsi;</p>
            </div>
      </div>
      <section className="promotion">
      <div className="promotion-main">
        <h2 data-aos="fade-right">İdman Rahatlığı StartPoint-də!</h2>
        <p data-aos="fade-right">Tətbiqi yüklə, StartPoint rahatlığından faydalan.</p>
        <div data-aos="zoom-out" data-aos-delay="300" className="prm-buttons">
        <a href="#"><img className='app-store' src={appStore} alt="App store" /></a>
        <a href="#"><img className='play-market' src={playMarket} alt="Play Market" /></a>

        </div>
      </div>

      <div className="promotion-video">
      <video src={video} width="750" height="500" controls loop muted autoPlay>
     </video>

      </div>
    </section>

    </div>
    </>
  )
}

export default OperatorPanel