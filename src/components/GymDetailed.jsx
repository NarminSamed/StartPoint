import React from 'react'
import StarRatings from 'react-star-ratings'
import Iframe from 'react-iframe'
import {activePackages} from '../activePackages'
import { teamData } from '../teamData'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const GymDetailed = () => {

// Slider
// const settings = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 2000,
//   cssEase: "linear",
//   variableWidth: true,
//   arrows:false,

  
  
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };


  return (
    <>
   <div className="gym-detailed_hero">
    <div className="gym-detailed_body">
        <div className="gym-detailed_description">
    <StarRatings
              starDimension="20px"
              starSpacing="3px"
              starRatedColor='rgb(216, 15, 45)'
              starEmptyColor='rgb(203, 211, 227)'
              numberOfStars={5}
              rating={4.3}
          />

          <h1>CH Fitness</h1>
          <p className='gym-dtl_location'>Yeni Günəşli, Xalqlar dostluğu 47n</p>
          <div className="gym-dtl_rating">
            <div className="rating_number">
                <span>4.3</span>
            </div>
          <a href="/" className='feedback_link'>12 qiymətləndirmə <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          </div>
    </div>
   </div>


<div className="gym-dtl_img">
  <div className="gym-dtl_img__body">
    <div className="gym_all-btn">
    <button className="gym-dtl_btn">Hamısı</button>
    </div>
    <div className="gym-dtl_img_container">
      <div className="gym-img-big">
        <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1666619890/DSC_7509_jm8cfi.jpg" alt="CH Fitness photos" />
      </div>
      <div className="gym-img-little">
        <div className="img_box_top">
          <div className='img__flex img_margin'>
            <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1666619908/DSC_7427_d5eqan.jpg" alt="CH Fitness photos" />
          </div>
          <div className='img__flex border-radius_top'>
            <img className='border-radius_top' src="https://res.cloudinary.com/dkt4cajom/image/upload/v1666619889/DSC_7451_zwip3v.jpg" alt="CH Fitness photos" />
          </div>
        </div>
        <div className="img_box_bottom">
        <div className='img__flex img_margin '>
          <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1666619922/DSC_7476_pxrscu.jpg" alt="CH Fitness photos" />
        </div>
          <div className='img__flex border-radius_bottom'>
            <img className='border-radius_bottom' src="https://res.cloudinary.com/dkt4cajom/image/upload/v1666620630/DSC_7406_dw0tq3.jpg" alt="CH Fitness photos" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="gym-detailed_info_container">
  <div className="gym-detailed_info_wrapper">
    <div className="gym-detailed_map">
      <div className="gym-location_map">
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.828036460762!2d50.0982238148982!3d40.52329185707641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030f55c90f9f127%3A0x781921c9a6e9d0b9!2sCH%20Fitness!5e0!3m2!1str!2s!4v1666681585249!5m2!1str!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="500px"
        id="myId"
        className="fitnessMap"
        display="initial"
        position="relative"/>
      </div>
    </div>
    <div className="gym-detailed_info_main">
      <h4>Zal haqqında ətraflı məlumat</h4>
      <div className="gym-detailed_about">
           <div className="gym-detailed_about_features">
            <div className="features-box">
            <i className="fa-solid fa-user"></i>
              <p>Həm kişilər, həm qadınlar üçün</p>
            </div>
            <div className="features-box">
            <i className="fa-solid fa-clock"></i>
              <p>Qadınlar üçün xüsusi vaxt mövcuddur</p>
            </div>
            <div className="features-box">
            <i className="fa-solid fa-medal"></i>
              <p>Fərdi təlimçi</p>
            </div>
            <div className="features-box">
            <i className="fa-regular fa-calendar"></i>
              <p>İş qrafiki: 09:00 - 23:00</p>
            </div>
            <div className="features-box features-box_hover">
            <i className="fa-solid fa-phone"></i>
              <a href="tel:+994509999095">+994 50 999 90 95</a>
            </div>
           </div>
           <div className="gym-detailed_social">
            <div className="detailed-social_media">
            <a href="https://www.instagram.com/ch__fitness/" target="_blank"><i className="fa-brands fa-instagram"></i></a> 
            </div>
            <div className="detailed-social_media">
            <a href="https://wa.me/509999095" target="_blank"><i className="fa-brands fa-whatsapp"></i></a> 
            </div>
            <div className="detailed-social_media">
            <a href="https://www.facebook.com/people/CH-Fitness/100063648696516/"  target="_blank"><i className="fa-brands fa-facebook-f"></i></a> 
            </div>
           </div>
      </div>
    </div>
  </div>
</div>


<div className="gym-active_packages_container">
  <h2>Aktiv paketlər</h2>
  <div className="active-packages_wrapper">
    {activePackages.map((activePackages,i)=>(
      <div key={activePackages.id} className="gym-active-package">
          <div className="package_price">
            <p className='active_packages__name'>{activePackages.name}</p>
            <p className='active_packages__price'>{activePackages.price}</p>
          </div>
          <ul className="package_price__list">
            <li className="package_price__list--item">
            <i className="fa-solid fa-circle"></i>
            <span>İstifadə müddəti: </span>
            <p> {activePackages.date} </p> 
            </li>
            <li className="package_price__list--item">
            <i className="fa-solid fa-circle"></i>
            <span>İstifadə sayı: </span>
            <p> {activePackages.numberofuses} </p> 
            </li>
            <li className="package_price__list--item">
            <i className="fa-solid fa-circle"></i>
              <span>Xidmətlər: </span>
             <p> {activePackages.services}</p>
            </li>
          </ul>
          <div className="package_price--button">
          <button>{activePackages.button}</button>
          </div>
      </div>
    ))} 
  </div>
  <div className="active-packages_all__btn">
  <button>Hamısına bax</button>
  </div>
</div>

<div className="team_container">
<h2>Komanda</h2>
<div className="team_wrapper">

  {teamData.map((teamData, i)=>(
    <div key={teamData.id} className="team_box">
      <div className="team_img"> {teamData.image}</div>

    <div className="team_description">
      <p className="team_name">{teamData.fullname}</p>
      <span className="team_position">{teamData.position}</span>
      <div className="team_sosial-media">
     <a href={teamData.instagram} target="_blank"><i className="fa-brands fa-instagram"></i></a>
     <a href={teamData.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></a> 
      </div>

      </div>
    </div>
  ))}
 
</div>
</div>
    </>
  )
}

export default GymDetailed