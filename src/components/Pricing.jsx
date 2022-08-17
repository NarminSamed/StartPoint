import React from 'react'

const Pricing = () => {
  return (
    <>
<div className='price-hero'>
      <div className="price-hero__body">
          <h1>Qiymətlərimiz</h1>
      </div>

</div>

<div className="price-box_hero">

  <div className="price-box_title">
<h3>Fitnes biznesinizi idarə etmək üçün sizə lazım olan hər şey, sərfəli qiymətlə</h3>
<p>Bizə qoşul İlk ay ödənişsiz istifadə et</p>
</div>

<div className="price-box_wrapper">
    <div className="price-box_body">
  <p className='name'>Standart <br /> paket</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price_number">
  <p className='number'>100</p>
  <i class="fa-solid fa-manat-sign"></i>
  </div>

  <div className="price_btn">
  <a href="#">İndi al</a>
  </div>
  </div>

  <div className="price-box_body">
  <p className='name'>Standart Plus<br /> İllik </p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price_number">
  <p className='number'>500</p>
  <i class="fa-solid fa-manat-sign"></i>
  </div>

  <div className="price_btn">
  <a href="#">İndi al</a>
  </div>
  </div>

  <div className="price-box_body">
  <p className='name'>Premium <br /> paket</p>
  <p className='info'>Zalın il ərzində tətbiqdə görünməsi</p>
  <div className="price_number">
  <p className='number'>900</p>
  <i class="fa-solid fa-manat-sign"></i>
  </div>
 <div className="price_btn">
  <a href="#">İndi al</a>
  </div>
  </div>
  </div>
</div>

<div className="price_table">
  <div className="table_title">
    <h4>StartPoint üstünlükləri</h4>
    <p>Bütün təklifləri müqayisə edin</p>
  </div>

  <table className='table'>

  <thead>
    <tr>
    <td></td>
      <td className='table_head'>Standart paket</td>
      <td className='table_head'>Standart Plus paket</td>
      <td className='table_head'>Premium paket</td>
    </tr>
  </thead>

<tbody>
  <tr className='table_row'>
    <td className='feature_title'>İsdifadəçi Mobil APP-i</td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>Operator paneli</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>Sahibkar paneli</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>Nağd ödəniş dəstəyi</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>24/7 dəstək</td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>Push Notifications</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

  <tr className='table_row'>
    <td className='feature_title'>SMM xidməti</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-xmark"></i></td>
    <td><i class="fa-solid fa-check"></i></td>
  </tr>

</tbody>
  </table>
</div>

<div className="faq-client">
<h2>SSS</h2>
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