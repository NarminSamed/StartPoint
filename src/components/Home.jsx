import React from 'react'
import girl from '../images/Layer-1.png'
import appStore from '../assets/app-store.svg'
import playMarket from '../assets/play-market.svg'
import {gymsData} from '../gymsData'
import { testimonialsData} from '../testimonialsData'
import StarRatings from 'react-star-ratings'
import {partnerData} from '../partnerData'
import video from '../images/video.MP4'
import Testimonial from './Testimonial'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import AOS from "aos";
import "aos/dist/aos.css";





const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    arrows:false,

    
    
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  AOS.init();


  return (
    <>

    <header className='header'>
      <div  className="head-text" data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <h1><span>İdman zalı axtarırsınız,</span><br />amma bilmirsiniz harada?</h1>
        <p>Onda sizə StartPoint yardımçı olacaq.</p>
      </div>
      <div data-aos="zoom-out-left" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600" className="head-photo">
        <img src={girl} alt="young girl" /> 
      </div>
    </header>


<div className="partners-center">
  
    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="partner">
     {partnerData.map((partner,i)=>(
    <div className="slide" key={partner.id}> {partner.image} </div>
    ))}
 
   
    </div>
    </div>

    <section  className='advantages'>
    <h2 data-aos="fade-right"> <span> StartPoint </span>  üstünlükləri ilə biznesinizi gücləndirin</h2>

    <div className="benefits" data-aos="zoom-out-up">
      <div className="user benefit">
      <i className="fa-solid fa-user-group"></i>
      <h4>İstifadəçi interfeysi</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Kartsız, rahat QR-la gediş etmək imkanı</p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Fitness mərkəzləri haqqında ətraflı məlumat</p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Tətbiqimizlə gediş edənlərə endirimli qiymətlər</p>
        </div>
      </div>
      <a href="#">Ətraflı</a>
      </div> 

      <div className="management benefit">
      <i className="fa-solid fa-bullseye"></i>
      <h4>İdarəetmə paneli</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Büdcənizə və komfortunuza uyğun zal idarəetmə sistemi</p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Hesabatlılıqla bağlı dəqiq analizlər aparmaq imkanı </p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Həm nağd, həm onlayn ödəniş dəstəyi</p>
        </div>
      </div>
      <a href="#">Ətraflı</a>
      </div>

      <div className="operator benefit">
      <i className="fa-solid fa-headset"></i>
      <h4>Operator üstünlükləri</h4>
      <div className="adv-main">
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Aktiv abunələrin müştəri məlumatlarını izləmək imkanı</p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Operator panelində nağd ödəniş etmək imkanı</p>
        </div>
        <div className="adv-text">
        <i className="fa-solid fa-circle-check"></i>
        <p>Geri qaytarma əməliyyatının aktiv abunəliklər hissəsindən icrası</p>
        </div>
      </div>
      <a href="#">Ətraflı</a>
      </div>
    </div>
    </section>
    
    <section className="gyms">
      <div className="gym-heading">
        <h2>İdman zalları</h2>
        <button>Hamısı</button>
      </div>
      <div className="gym-wrapper">
      {gymsData.map((gym, i)=>(
        <div className="gym-container" key={gym.id}>
        <div className='gym-img' >{gym.image}</div>  
        <div className="gym-body">
          <p className='gym-title'>{gym.title}</p>
          <p className='location'>{gym.location}</p>
          <div className="rating">
          <StarRatings
              rating={gym.starCount}
              starDimension="20px"
              starSpacing="3px"
              starRatedColor='rgb(216, 15, 45)'
              starEmptyColor='rgb(203, 211, 227)'
          /> 
           <span className='feedback'>{gym.feedback}</span>


          </div>
          </div>
        </div>
      ))}
      </div>
    </section>

    <section className="why-us">
        <h2 data-aos="fade-right">Niyə bizi seçməlisiniz?</h2>
      <div className="why-us_body">

        <div data-aos="fade-right" data-aos-delay="300" className="why-us_text">
        <h4>Zal idarəetmə və qeydiyyat sistemi bizlikdir! </h4>
        <div className="why-us_description">
          <p>İdman kompleksləri üçün vahid axtarış və müqayisə sistemi</p>
          <p>Ədalətli və rahat platforma üzərindən sizə ən uyğun idman kompleksini seçərək zamanınıza və xərclərinizə qənaət edin.</p>
          <p>Partnyorlarımız tərəfindən təklif edilən xidmət paketlərinə
             uyğun olaraq onlayn ödəniş et.</p>
          <p>Yaranmış virtual kartınızla gedişlər et.</p>
          <p>Paketləri və gedişlərinizi izlə.</p>
        </div>
        <div className="why-us_btn">
          <a href="#">Ətraflı</a>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </div>
        </div>

        <div className="why-us_img" data-aos="fade-left">
          <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1657983562/gym-girls_farmcm.png" alt="gym-girls" />
          <div className="rectangle"></div>
        </div>
      </div>
    </section>

    <section className="testimonials">
     <div className="testimonials-header">
      <h2>Müştəri məmnuniyyəti</h2>
     </div>
     
     <div className="testimonials-card">
   <Slider {...settings} >

      {testimonialsData.map((testimonial,index)=>(
        <Testimonial key={testimonial.id} icon={testimonial.icon} details={testimonial.details} image={testimonial.image} workplace={testimonial.workplace} name={testimonial.name}/>
     
      ))}
       </Slider>
     </div>
    </section>

<section className="price-table">
  <h2 data-aos="fade-right">Qiymət cədvəli</h2>
<div className="packages" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
  <div className="package ">
 <div className="package-title">
  <p className='name'>Standart <br /> paket</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price">
  <p className='number'>100</p>
  <i className="fa-solid fa-manat-sign"></i>
  </div>
 </div>
<div className="package-main">
  <div className="details">
  <i className="fa-solid fa-check"></i>
  <p className="detail">İstifadəçi Mobil APP-i</p>
  </div>
  <div className="details">
  <i className="fa-solid fa-check"></i>
  <p className="detail">StartPoint partnyorları siyahısında yerləşmə</p>
  </div>
  <div className="details">
  <i className="fa-solid fa-check"></i>
  <p className="detail">24/7 dəstək</p>
  </div>
</div>
  </div>

  <div className="package">
 <div className="package-title">
  <p className='name'>Standart Plus<br />İllik</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price">
  <p className='number'>500</p>
  <i className="fa-solid fa-manat-sign"></i>
  </div>
 </div>
<div className="package-main">
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">İstifadəçi Mobil APP-i</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Sahibkar paneli</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Operator paneli</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Push Notifications</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Nağd ödəniş dəstəyi</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">StartPoint partnyorları siyahısında yerləşmə</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">24/7 dəstək</p>
  </div>
</div>
  </div>

  <div className="package">
 <div className="package-title">
  <p className='name'>Standart Plus<br />İllik</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price">
  <p className='number'>950</p>
  <i className="fa-solid fa-manat-sign"></i>
  </div>
 </div>
<div className="package-main">
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">İstifadəçi Mobil APP-i</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Sahibkar paneli</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Operator paneli</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Push Notifications</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">Nağd ödəniş dəstəyi</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">StartPoint partnyorları siyahısında yerləşmə</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">24/7 dəstək</p>
  </div>
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">SMM xidməti</p>
  </div>
</div>
  </div>
</div>

</section>


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

    {/* <div className="discover">
      <p>Hələ də zövqünüzə uyğun idman zalını tapmamısınız?</p>
      <a href="#" className="discover-btn">İndi kəşf et</a>
    </div> */}
    </>
  )
}

export default Home


