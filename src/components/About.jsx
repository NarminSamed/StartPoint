import React from 'react'
import { partnerData } from '../partnerData'

import CountUp from 'react-countup';

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  AOS.init();
  return (
    <>

<section className="about-header">
  <div  className="about-text">
  <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  className='txt-title'>STARTPOINT HAQQINDA</p>
  <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="300" >Onlayn abunəlik və zal idarəetmə sistemi</h1>
  <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500" className='txt-description'>2020-ci ildə istifadəyə verildiyi vaxtdan bizim ardıcıl olaraq bir missiyamız var: 
Bütün növ idman mərkəzləri, studiolar və s. üçün ən yaxşı idarəetmə proqramını təmin etmək.</p>
<a data-aos="zoom-out" data-aos-delay="700" href="#">Əlaqə</a>
</div>
</section>

<section data-aos="zoom-in-left" className="about-img">
  <div className="img-container">
    <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1658867318/Group_986_l9fqqp.png" alt="StartPoint Team" />
  </div>
</section>

<section className="partner_advantages">
<h2 data-aos="zoom-in">Partnyorlarımız <br /> üçün  effektli <br /> <span>zal idarəetmə alətləri</span></h2>

<div className="partner_body">
  <div className="partner_main">
    <h4 data-aos="fade-right">Sizin üçün işləri asanlaşdırmaq üçün hər şeyi edirik</h4>
    <div data-aos="fade-right" data-aos-delay="300" className="partner_description">
      <div className="description_header">
      <i class="fa-solid fa-circle-check"></i>
      <h4>Sizin üçün işləri asanlaşdırmaq üçün hər şeyi edirik</h4>
      </div>
      <p> <span>Detallara əhəmiyyət veririk.</span> <br />Biz işlədiyimiz biznes sahiblərini dinləyirik və onların düşüncələrinə əhəmiyyət veririk, bizim üçün keyfiyyət bu deməkdir. Biz hərtərəfli, sadə və güclü məhsul təqdim etməkdən qürur duyuruq.</p>
    </div>
    <div data-aos="fade-right" data-aos-delay="400" className="partner_description">
      <div className="description_header">
      <i class="fa-solid fa-circle-check"></i>
      <h4>Biz proqram təminatından daha çoxuyuq</h4>
      </div>
      <p> <span>Zal idarəetmə və qeydiyyat sistemi bizlikdir!</span> <br />Proqramımız biznes sahiblərinə idman zallarını ən yüksək keyfiyyətdə idarə etməyə kömək edir. StartPoint rezervasiyalar, planlaşdırma, müştəri məmnuniyyətinə dəstək, ödənişlər və s. ilə bağlı kömək edir.</p>
    </div>
  </div>
  <div data-aos="fade-left" className="partner_img">
    <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1658951532/171_1_omwsbl.png" alt="gym software" />
  </div>
</div>
</section>

<section className="user_advantages">

<h2 data-aos="zoom-in">İstifadəçilərimiz üçün StartPoint <br /> <span>üstünlükləri</span></h2>
  <div className="user_body">
  <div data-aos="fade-right" className="user_img">
    <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1658986790/47_1_vghdck.png" alt="user interface" />
  </div>
  <div className="user_main">
    <h4 data-aos="fade-left">Sizin üçün işləri asanlaşdırmaq üçün hər şeyi edirik</h4>
    <div data-aos="fade-left"  data-aos-delay="300" className="user_description">
      <div className="description_header">
      <i class="fa-solid fa-circle-check"></i>
      <h4>Sizin üçün işləri asanlaşdırmaq üçün hər şeyi edirik</h4>
      </div>
      <p> <span>Detallara əhəmiyyət veririk.</span> <br />Biz işlədiyimiz biznes sahiblərini dinləyirik və onların düşüncələrinə əhəmiyyət veririk, bizim üçün keyfiyyət bu deməkdir. Biz hərtərəfli, sadə və güclü məhsul təqdim etməkdən qürur duyuruq.</p>
    </div>
    <div data-aos="fade-left"  data-aos-delay="400" className="user_description">
      <div className="description_header">
      <i class="fa-solid fa-circle-check"></i>
      <h4>Biz proqram təminatından daha çoxuyuq</h4>
      </div>
      <p> <span>Zal idarəetmə və qeydiyyat sistemi bizlikdir!</span> <br />Proqramımız biznes sahiblərinə idman zallarını ən yüksək keyfiyyətdə idarə etməyə kömək edir. StartPoint rezervasiyalar, planlaşdırma, müştəri məmnuniyyətinə dəstək, ödənişlər və s. ilə bağlı kömək edir.</p>
    </div>
  </div>

</div>
</section>


<section className='advantages about_section_advantages'>
    <h2 data-aos="zoom-in" className='about_section_title'> <span> StartPoint </span>  üstünlükləri ilə <br />biznesinizi gücləndirin</h2>

    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="benefits">
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

    <div className="partners-center about_section_partners">
  <h2 data-aos="zoom-in">Bizimlə əməkdaşlıq edən <span>idman zalları</span> </h2>
    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="partner">
     {partnerData.map((partner)=>(
    <div className="slide"> {partner.image}</div>
    
    ))}
    </div>
    </div>

<section className="counter">
  <h2 data-aos="zoom-in">Biz sizə ən yaxşı yolu tapmaqda kömək etmək üçün buradayıq</h2>
    <p></p>
    <div className="counter_container">
    <div className="counter_box">
        <p className='number'> 
        <CountUp end={3}
         duration={5}
         suffix={'+'}
         /></p>
        <span>Təcrübə</span>
      </div>
      <div className="counter_box">
        <p className='number'>
        <CountUp end={4000}
         duration={200} 
         />
          </p>
        <span>İstifadəçilərimiz</span>
      </div>
      <div className="counter_box">
        <p className='number'>
        <CountUp end={50}
         duration={40} 
         />
        </p>
        <span>Partnyorlarımız</span>
      </div>
      
      <div className="counter_box">
        <p className='number'>
        <CountUp end={4.7}
         duration={5}
         decimals={1}
         suffix={'+'}
         /></p>
        <span>Reytinq</span>
      </div>
    </div>
</section>
    </>
  )
}

export default About