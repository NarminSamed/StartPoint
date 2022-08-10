import React from 'react'
import girl from '../images/Layer-1.png'
import appStore from '../assets/app-store.svg'
import playMarket from '../assets/play-market.svg'
import {gymsData} from '../gymsData'
import { testimonialsData,settings } from '../testimonialsData'
import StarRatings from 'react-star-ratings'
import {partnerData} from '../partnerData'
import video from '../images/video.MP4'
import Testimonial from './Testimonial'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"







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
          dots: true
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
  return (
    <>
<a href="#" className="whatsapp">
<i class="fa-brands fa-whatsapp"></i>
</a>

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
     {partnerData.map((partner)=>(
    <div className="slide"> {partner.image}</div>
    ))}
 
    {/* <Slider>
      <div className="slide">
      <img src={partner1} alt="partner" />
      </div>

      <div className="slide power">
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
      
      </Slider> */}
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
      <a href="#">Ətraflı</a>
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
      <a href="#">Ətraflı</a>
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
      {gymsData.map((gym)=>(
        <div className="gym-container">
        <div className='gym-img'>{gym.image}</div>  
        <div className="gym-body">
          <p className='gym-title'>{gym.title}</p>
          <p className='location'>{gym.location}</p>
          <div className="rating">
          {/* {starRayting.map((star)=>(<span className='icon'>{star.rating}</span>))} */}

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
        <h2>Niyə bizi seçməlisiniz?</h2>
      <div className="why-us_body">

        <div className="why-us_text">
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
          <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
        </div>

        <div className="why-us_img">
          <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1657983562/gym-girls_farmcm.png" alt="gym-girls" />
          <div className="rectangle"></div>
        </div>
      </div>
    </section>

    <section className="testimonials">
     <div className="testimonials-header">
      <h2>Müştəri məmnuniyyəti</h2>
      <div className="arrows">
        <div className="left-arrow">
      <i class="fa-solid fa-angle-left"></i>
      </div>
      <div className="right-arrow">
      <i class="fa-solid fa-angle-right"></i>
      </div>
      </div>
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
  <h2>Qiymət cədvəli</h2>
<div className="packages">
  <div className="package ">
 <div className="package-title">
  <p className='name'>Standart <br /> paket</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price">
  <p className='number'>100</p>
  <i class="fa-solid fa-manat-sign"></i>
  </div>
 </div>
<div className="package-main">
  <div className="details">
  <i class="fa-solid fa-check"></i>
  <p className="detail">İstifadəçi Mobil APP-i</p>
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
  <p className='number'>500</p>
  <i class="fa-solid fa-manat-sign"></i>
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
  <i class="fa-solid fa-manat-sign"></i>
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
        <h2>İdman Rahatlığı StartPoint-də!</h2>
        <p>Tətbiqi yüklə, StartPoint rahatlığından faydalan.</p>
        <div className="prm-buttons">
        <a href="#"><img className='app-store' src={appStore} alt="App store" /></a>
        <a href="#"><img className='play-market' src={playMarket} alt="Play Market" /></a>

        </div>
      </div>
      <div className="promotion-video">
      <video src={video} width="750" height="500" controls>
     </video>

      </div>
    </section>

    <div className="discover">
      <p>Hələ də zövqünüzə uyğun idman zalını tapmamısınız?</p>
      <a href="#" className="discover-btn">İndi kəşf et</a>
    </div>
    </>
  )
}

export default Home


