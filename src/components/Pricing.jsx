import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
const Pricing = () => {


  return (
    <>
      <div className='price-hero'>
        <div className="price-hero__body">
          <h1 data-aos="fade-right">Qiymətlərimiz</h1>
        </div>
      </div>

      <div className="price-box_hero">

        <div className="price-box_title">
          <h3 data-aos="zoom-in" data-aos-delay="300">Fitnes biznesinizi idarə etmək üçün sizə lazım olan hər şey, sərfəli qiymətlə</h3>
          <p data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-delay="400">Bizə qoşul İlk ay ödənişsiz istifadə et</p>
        </div>

        <div className="price-box_wrapper">


          <div className="price-box_body">

            <div class="price_back">
              <h2>Standart Paket</h2>
              <ul className='back_list'>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Istifadəçi mobil APP-i</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Dəstək</span>
                </li>
              </ul>
              <div className="price_btn back_btn">
                <Link to="/payment">İndi qoşul</Link>
              </div>
            </div>

            <div className="price_front">
              <p className='name'>Standart <br /> paket</p>
              {/* <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p> */}
              <div className="price_number">
                <p className='number'>100</p>
                <i className="fa-solid fa-manat-sign"></i>
              </div>

            </div>

          </div>

          <div className="price-box_body">

            <div class="price_back">
              <h2>Standart Plus Paket</h2>
              <ul className='back_list'>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Standart Paket</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Operator paneli</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Sahibkar paneli</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Nağd ödəniş dəstəyi</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Anlıq bildirimlər</span>
                </li>
              </ul>
              <div className="price_btn back_btn">
                <Link to="/payment">İndi qoşul</Link>
              </div>
            </div>

            <div className="price_front">
              <p className='name'>Standart Plus <br /> paket</p>
              {/* <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p> */}
              <div className="price_number">
                <p className='number'>500</p>
                <i className="fa-solid fa-manat-sign"></i>
              </div>

            </div>

          </div>



          <div className="price-box_body">

            <div class="price_back">
              <h2>Premium Paket</h2>
              <ul className='back_list'>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Standart Paket</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Standart Plus Paket</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Sahibkar paneli</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>SMM xidməti</span>
                </li>
              </ul>
              <div className="price_btn back_btn">
                <Link to="/payment">İndi qoşul</Link>
              </div>
            </div>

            <div className="price_front">

              <p className='name'>Premium <br /> paket</p>
              {/* <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p> */}
              <div className="price_number">
                <p className='number'>900</p>
                <i className="fa-solid fa-manat-sign"></i>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="price_table">

        <div className="table_title">
          <h4 data-aos="zoom-in">StartPoint üstünlükləri</h4>
          <p data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-delay="400">Bütün təklifləri müqayisə edin</p>
        </div>



        <table className='table'>

          <thead>
            <tr>
              <th></th>
              <th className='table_head'>Standart paket</th>
              <th className='table_head'>Standart Plus paket</th>
              <th className='table_head'>Premium paket</th>
            </tr>
          </thead>

          <tbody>
            <tr className='table_row'>

              <td className='feature_title'>
                <Tooltip title="StartPoint mobil tətbiqində il ərzində idman zalının görünməsi" placement="right">
                  <Button sx={{ m: 1 }}>İsdifadəçi Mobil APP-i</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>İsdifadəçi Mobil APP-i</td> */}
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>Dəstək</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>Dəstək</td> */}
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>Operator paneli</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>Operator paneli</td> */}
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>Sahibkar paneli</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>Sahibkar paneli</td> */}
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>Nağd ödəniş dəstəyi</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>Nağd ödəniş dəstəyi</td> */}
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>


            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>Push Notifications</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>Push Notifications</td> */}
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

            <tr className='table_row'>
              <td className='feature_title'>
                <Tooltip title="Problem yaranandan sonra hər paktə uyğun olaraq dəstək göstərilir." placement="right">
                  <Button sx={{ m: 1 }}>SMM xidməti</Button>
                </Tooltip> </td>
              {/* <td className='feature_title'>SMM xidməti</td> */}
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-check"></i></td>
            </tr>

          </tbody>
        </table>

      </div>

      <div className="faq-client">
        <h2 data-aos="zoom-in">SSS</h2>
        <div className="faq-client_wrapper">

          <div className="faq_boxes_top">
            <div className="faq-client_box">
              <h4>StartPoint partnyoru necə ola bilərəm?</h4>
              <p>Partnyorumuz olmağın ən yaxşı yolu telefon və ya e-poçt vasitəsilə bizimlə əlaqə saxlamaqdır. Alternativ olaraq, siz qrup üzvlərindən StartPoint-in biznesiniz üçün xüsusi olaraq necə işləyə biləcəyini göstərə biləcəkləri Demo sifariş edə bilərsiniz.</p>
            </div>

            <div className="faq-client_box">
              <h4>Qiymətləriniz nə qədərdir?</h4>
              <p>Qiymətlərimiz yuxarıda bu səhifədə verilmişdir. Əgər siz StartPoint-də olmayan funksionallıqlardan istifadə etmək qərarına gəlsəniz, əlavə ödənişin olduğunu unutmayın.</p>
            </div>
          </div>

          <div className="faq_boxes_bottom">
            <div className="faq-client_box">
              <h4>Hər hansı bir müqavilə imzalayırıq?</h4>
              <p>Bəli, sadecə bank və vergi məsələlərinə görə partnyorlar arası müqavilə imzalanır. Bağlanmış müqavilədə heç bir təhlükəli hal yoxdur. </p>
            </div>

            <div className="faq-client_box">
              <h4>Əlavə sualınız var?</h4>
              <p> Siz StartPoint-in sizin biznesinizə necə kömək edə biləcəyini və daha bir çox məsələri bizimlə əlaqə saxlayaraq müəyyən edə bilərsiniz. </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Pricing