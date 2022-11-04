import React from 'react'
import bgLine from '../images/bg-line-left.png'
import appStore from '../assets/app-store.svg'
import playMarket from '../assets/play-market.svg'
import video from '../images/video.MP4'

import AOS from "aos";
import "aos/dist/aos.css";

const UserInterface = () => {

    AOS.init();

  return (
    <>
    <div className="user-interface_hero">
        <div className="user-interface_body">
            <h1>İstifadəçi interfeysi</h1>
        </div>
    </div>

<div className="user-interface_stages">
    <div className="user-interface_stage">

        <div className="registration-stage">
            <div className="__description">
                {/* <div><span>1</span></div> */}
                <p>StartPoint tətbiqinin yüklənilməsi və Qeydiyyat prosesi</p>
            </div>
            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667474709/qeydiyyat_png_l8we2m.png" alt="register" />
            </div>
        </div>
        
        <div className="search-stage">
        <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667474700/mockup2_sgzhfq.png" alt="register" />
            </div>

            <div className="__description">
                {/* <div><span>1</span></div> */}
                <p>Axtarış və idman mərkəzinin seçimi</p>
                <span>Sizə ən uyğun idman mərkəzini axtarış hissəsindən seçirsiniz.</span>
            </div>
        </div>

        <div className="information-stage">
        <div className="__description">
                {/* <div><span>1</span></div> */}
                <p>Zal haqqında ətraflı məlumatın <br /> əldə edilməsi</p>
                <span>İdman mərkəzi haqqında bütün məlumatları tapa bilərsiniz.</span>
            </div>

            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667474648/mockup3_jnhblq.jpg" />
            </div>
        </div>

        <div className="package-stage">
        <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667497555/mockup4_01_duaxqu.png" alt="register" />
            </div>

            <div className="__description">
                {/* <div><span>1</span></div> */}
                <p>Paket al</p>
                <span>Paketlər bölməsinə daxil olaraq istəyinizə uyğun həm onlayn, həm də nağd (idman
                 mərkəzində operatora yaxınlaşaraq) ödəniş edərək paket alırsınız.</span>
            </div>
        </div>

        <div className="qr-stage">
        <div className="__description">
                {/* <div><span>1</span></div> */}
                <p>Gediş et</p>
                <span>Zala giriş etmək istədiyiniz zaman operatora QR kodu oxutduraraq məşqə başlayırsınız.</span>
            </div>

            <div className="__image">
                <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1667474650/mock7_ump8lc.png" alt="register" />
            </div>
        </div>
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
    </>
  )
}

export default UserInterface