import React from 'react'
import whiteLogo from '../images/logo-white.png'
const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-body">
            <div className="sp-logo">
                <img src={whiteLogo} alt="StartPoint" />
                <p>Onlayn abunəlik və zal<br />idarəetmə sistemi</p>
            </div>
            <div className="sports">
                <h4 className='footer-title'>İdman növləri</h4>
                <div className="sport">
                    <a href="#">Fitness zalları </a>
                    <a href="#">Yoga, Pilates  studioları</a>
                    <a href="#">Boks və döyüş sənətləri</a>
                    <a href="#">Futbol stadionları</a>
                </div>
            </div>
            <div className="companies">
                <h4 className='footer-title'>Şirkət</h4>
                <div className="company">
                    <a href="#">Haqqımızda</a>
                    <a href="#">İstifadə şərtləri</a>
                    <a href="#">Gizlilik siyasəti</a>
                </div>
            </div>

            <div className="contact">
                <h4 className='footer-title'>Əlaqə</h4>
                <a href="#">+994 70 607 52 22</a>
                <div className="icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
        <div className="footer-content">
            <p>© 2021 StartPoint.az Bütün hüquqlar qorunur.</p>
        </div>
    </section>
  )
}

export default Footer