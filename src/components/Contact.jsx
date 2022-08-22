import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    const serviceID = 'service_k0zqshm'
    const templateID ='template_e1yr1se'
    const publicKEY = 'Ics7pEQTHxuPVs5eY'

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (

    <>
    <div className='contact-hero'>
      <div className="contact_head">
        <h2 data-aos="fade-right">Əlaqə</h2>
      </div>
    </div>

<div className="contact__container">
  <div className="contact_title">
    <h4 data-aos="zoom-in" data-aos-delay="300">Bizimlə əlaqə saxlayın</h4>
    <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-delay="400">İş saatı: Bazar ertəsi - Cümə (09:00 - 19:00)</p>
  </div>

<div className="contact_info">

<div className="contact_flex" data-aos="flip-left">
 
<i class="fa-solid fa-location-dot"></i>

<h4>Ünvan</h4>
<p>Rüstəm Rüstəmov 72E</p>

</div>

<div className="contact_flex" data-aos="flip-left">
 
<i className="fa-solid fa-phone"></i>

<h4>Əlaqə</h4>
<a href="tel:+994706075222">+994 70 607 52 22</a>

</div>

<div className="contact_flex" data-aos="flip-left">
 
<i className="fa-solid fa-envelope"></i>

<h4>E-poçt</h4>
<a href="mailto:info@startpoint.az">info@startpoint.az</a>

</div>
</div>

</div>

<div className="contact_form">
  <div className="contact__form_hero">

  <form ref={form} onSubmit={sendEmail}>
   <h3>Məlumatları doldurun</h3>
   {/* Fullname input */}
   <div className="text_center">
    <input type="text"
    className='form-area'
    placeholder='Ad Soyad' 
    name='fullname'/>
   </div>
    {/* Phone input */}
    <div className="text_center">
    <input type="text"
    className='form-area'
    placeholder='Əlaqə nömrəsi'
    name='number'/>
   </div>

    {/* Email input */}

    <div className="text_center">
    <input type="email"
    className='form-area'
    placeholder='Email' 
    name='email'/>
   </div>

    {/* Message input */}
 <div className="text_center">
      <textarea type="text"
      className='form-area'
      placeholder='Mesajınızı daxil edin...'
      name='message' />
   </div>

   <button className='contact_btn' type='submit'>Göndər</button>


   </form>

   <div className="contact_img">
    
    <img src="https://res.cloudinary.com/dkt4cajom/image/upload/v1660664303/Image_p0trno.png" alt="fit girl" />
  </div>

  </div>
  
</div>

<div className="contact_iframe">
<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9904627859296!2d49.938913114894355!3d40.40906206403066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062fe8b39e2bf%3A0xef3db4fc79444069!2zNzQgUsO8c3TJmW0gUsO8c3TJmW1vdiwgUWFyYcOndXh1ciwgQXplcmJheWNhbg!5e0!3m2!1str!2s!4v1660673671032!5m2!1str!2s"
        width="100%"
        height="455px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
</div>
    </>
  )
}

export default Contact