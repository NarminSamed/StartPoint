import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate';
import { regionsData } from '../regionsData'
import { servicesData } from '../servicesData';
import { filterData } from '../filterData';
import { sortData } from '../sortData';
import { gymTotalData } from '../gymTotalData';
import StarRatings from 'react-star-ratings'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Gym = () => {

  const [isActive, setIsActive] = useState (false)
  const [isActiveService, setIsActiveService] = useState (false)
  const [isActiveFilter, setIsActiveFilter] = useState (false)
  const [isActiveSort, setIsActiveSort] = useState (false)


  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6

  useEffect(() => {
   
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gymTotalData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(gymTotalData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, gymTotalData]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gymTotalData.length;
    setItemOffset(newOffset);
  };

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

// const wrapper = document.querySelector('.wrapper')
// const selectBtn = wrapper.querySelector('.select-btn')

// selectBtn.addEventListener('click', ()=> {
//   wrapper.classList.toggle('active')
// })

// const handleChange = (selectedOption) => {
//   console.log("handleChange", selectedOption )
// }

// const [selected, setSelected] = useState([]);

  return (
    <>
<section className="gym_header">
  <h1>İdman zalları</h1>

<div className="select_wrapper">

<div className="select-group">

<div className="select">
  
<div  className="select-btn select-line" onClick={(e) => 
setIsActive(!isActive) }>
  <span>Rayonlar</span>
  <i className="fa-solid fa-angle-down"></i>
 </div>
<div className="select_content">
  {isActive && (
<ul className='options'>
           {regionsData.map((region)=> (
          <li className='option-item' >{region.region}</li>
             ))}
        </ul>
        )}
</div>

        
</div>  



<div className="select">
  
<div  className="select-btn select-line" onClick={(e) => 
setIsActiveService(!isActiveService) }>
  <span>Xidmətlər</span>
  <i className="fa-solid fa-angle-down"></i>
 </div>
<div className="select_content">
  {isActiveService && (
<ul className='options'>
        {servicesData.map((service)=> (
          <li className='option-item' >{service.service}</li>
             ))}
        </ul>
        )}
</div>

</div> 


<div className="select">
  
<div  className="select-btn select-line" onClick={(e) => 
setIsActiveFilter(!isActiveFilter) }>
  <span>Filter</span>
  <i className="fa-solid fa-angle-down"></i>
 </div>
<div className="select_content">
  {isActiveFilter && (
<ul className='options'>
           {filterData.map((filter)=> (
          <li className='option-item' >{filter.filter}</li>
             ))}
        </ul>
        )}
</div>

</div>

<div className="select">
  
<div  className="select-btn" onClick={(e) => 
setIsActiveSort(!isActiveSort) }>
  <span>Sıra</span>
  <i className="fa-solid fa-angle-down"></i>
 </div>
<div className="select_content">
  {isActiveSort && (
<ul className='options'>
           {sortData.map((sort)=> (
          <li className='option-item' >{sort.sort}</li>
             ))}
        </ul>
        )}
</div>

</div> 


</div>
<button type='submit' className='submit-btn'><a href="#">Tətbiq et</a></button>

</div>
</section>

<section className="gyms_section">
      <div className="gym-wrapper">
      {gymTotalData.map((gym)=>(
        <div className="gym-container">
        <div className='gym-img'>{gym.image}</div>  
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed='2'
        containerClassName='pagination'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        nextLinkClassName='page-item'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='page-active'
        activeLinkClassName='page-active-link'
      />
    </section>


    <section className="gyms_section_promotion">
      <h2>Son baxılan idman zalları</h2>
      <div className="gym-wrapper_promation">
      <Slider {...settings} >
      {gymTotalData.map((gym)=>(
        <div className="gym-container">
        <div className='gym-img'>{gym.image}</div>  
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
      </Slider>
      </div>
     
    </section>

    </>
  )
}

export default Gym