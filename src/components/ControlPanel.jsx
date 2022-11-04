import React from 'react'

import appStore from '../assets/app-store.svg'
import playMarket from '../assets/play-market.svg'
import video from '../images/video.MP4'

import AOS from "aos";
import "aos/dist/aos.css";

const ControlPanel = () => {

    AOS.init();
  return (
    <>
    
    <div className="control-panel_hero">
        <div className="control-panel_body">
            <h1>İdarəetmə paneli</h1>
        </div>
    </div>
    
    <div className="control-panel_sections">
        <div className="functionality-section">
            <div className="__description">
                <h3>Sahibkar Panelinin <span>funksionallıqları</span></h3>
                <p>Abunəliklərə nəzarət; Rəylərin izlənilməsi; Şikayət və təklif qutusu; Kampaniya yaratmaq; Ödənişlərə nəzarət; Operator nəzarəti</p>
            </div>

            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667567546/comp1_1_x56xnt.png" alt="software panel" />
            </div>
        </div>

        <div className="class-section">
            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667567546/Group_1025_sojcks.png" alt="class logic" />
            </div>

            <div className="__description">
                <h3>Sinif <span>məntiqi</span> </h3>
                <p>Sinif məntiqi ilə artıq insanlar, arzu etdikləri gün və saatı özləri təyin edirlər. <br /> Dostlar, rəfiqələr birlikdə qrup yaradaraq, pilates ilə 
                 məşğul olurlar. <br /> Hətta, gün və saatlarını belə özləri dəyişirlər.</p>
                 <span>Kontrol öz əllərİndə</span>
            </div>
        </div>
        
        <div className="customer-section">
            <div className="__description">
                <h3>Müştəri <span>məmnuniyyəti</span> </h3>
                <p>Paketlər bölməsinə daxil olaraq istəyinizə uyğun həm onlayn, həm də nağd (idman mərkəzində operatora yaxınlaşaraq) ödəniş edərək
                   paket alırsınız.</p>
            </div>

            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667567547/171_do7fdy.png" alt="Customer satisfaction" />
            </div>
        </div>

    </div>

    <div className="control-panel_advantages">
        <div className="control-panel_advantage">
            <i className="fa-solid fa-bullhorn"></i>
            <h4>Kampaniya yaradılması</h4>
            <p>Müddətli və ya müddətsiz endirim kampaniyaları yarat və kampaniyanın effektivliyini izlə.</p>
        </div>
        <div className="control-panel_advantage">
            <i className="fa-solid fa-file-invoice"></i>
            <h4>Onlayn hesabatlılıq</h4>
            <p>İstənilən zaman aralığında ətraflı olaraq satışlar və gəlirlər barədə hesabatlara bax</p>
        </div>
        <div className="control-panel_advantage">
        <i class="fa-solid fa-user-plus"></i>
            <h4>Yeni müştəri kütləsi</h4>
            <p>Kommentlər, şikayət və təkliflər funksionallıqları ilə müştərilərin zal barədə fikirlərini öyrən.</p>
        </div>
    </div>

    <div className="more-detailed">
        <h2>Daha ətraflı məlumat üçün pdf yüklə</h2>
        <button>Yüklə</button>
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
    </>
  )
}

export default ControlPanel