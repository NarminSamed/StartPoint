import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
import { Link } from 'react-router-dom';


const Gym = () => {

  const [isActive, setIsActive] = useState(false)
  const [isActiveService, setIsActiveService] = useState(false)
  const [isActiveFilter, setIsActiveFilter] = useState(false)
  const [isActiveSort, setIsActiveSort] = useState(false)

  // Paginate
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gymTotalData.slice(itemOffset, endOffset));
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPageCount(Math.ceil(gymTotalData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, gymTotalData]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gymTotalData.length;
    setItemOffset(newOffset);
  };

  // Slider
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
    arrows: false,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
      <section className="gym_header">
        <h1 data-aos="fade-right">İdman zalları</h1>

        <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" className="select_wrapper">

          <div className="select-group">

            <div className="select">

              <div className="select-btn select-line" onClick={() =>
                setIsActive(!isActive)}>
                <span>Rayonlar</span>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="select_content">
                {isActive && (
                  <ul className='options'>
                    {regionsData.map((region, i) => (
                      <li className='option-item' key={region.id}>{region.region}</li>
                    ))}
                  </ul>
                )}
              </div>


            </div>



            <div className="select">

              <div className="select-btn select-line" onClick={() =>
                setIsActiveService(!isActiveService)}>
                <span>Xidmətlər</span>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="select_content">
                {isActiveService && (
                  <ul className='options'>
                    {servicesData.map((service, i) => (
                      <li className='option-item' key={service.id} >{service.service}</li>
                    ))}
                  </ul>
                )}
              </div>

            </div>


            <div className="select">

              <div className="select-btn select-line" onClick={() =>
                setIsActiveFilter(!isActiveFilter)}>
                <span>Filter</span>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="select_content">
                {isActiveFilter && (
                  <ul className='options'>
                    {filterData.map((filter, i) => (
                      <li className='option-item' key={filter.id} >{filter.filter}</li>
                    ))}
                  </ul>
                )}
              </div>

            </div>

            <div className="select">

              <div className="select-btn" onClick={() =>
                setIsActiveSort(!isActiveSort)}>
                <span>Sıra</span>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="select_content">
                {isActiveSort && (
                  <ul className='options'>
                    {sortData.map((sort, i) => (
                      <li className='option-item' key={sort.id} >{sort.sort}</li>
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
          {gymTotalData.map((gym, i) => (

            <div key={gym.id} className="gym-container">
              <Link to='/gymdetailed'>
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
              </Link>
            </div>
          ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
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
            {gymTotalData.map((gym, i) => (
              <div key={gym.id} className="gym-container">
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