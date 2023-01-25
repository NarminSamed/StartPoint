import React, { useEffect, useRef, useState } from 'react'
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


  const [currentItems, setCurrentItems] = useState();
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


  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/district')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [gyms, setGym] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/gyms')
      .then(res => {
        console.log(res)
        setGym(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



const cheatsheetBtn = useRef()
const listView = useRef()
const compactBtn = useRef()
const viewFlex=useRef()
const listGymContainer = useRef()

const listActive = (e) => {
  const kliklenenElement = e.target
  if (kliklenenElement === cheatsheetBtn.current) {
    listView.current.classList.remove('compact')
    listView.current.classList.add('cheatsheet')
    viewFlex.current.classList.add('list__view')
    listGymContainer.current.classList.add('list_gym-container')
  }
}

const gridActive = (e) => {
  const kliklenenElement = e.target
  if (kliklenenElement === compactBtn.current) {
    listView.current.classList.remove('cheatsheet')
    listView.current.classList.add('compact')
  }
}


  return (
    <>
      <section className="gym_header">
        <h1 data-aos="fade-right">İdman zalları</h1>

        <div className='select__container'>

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
                    // <ul className='options'>
                    //   {regionsData.map((region, i) => (
                    //     <li className='option-item' key={region.id}>{region.region}</li>
                    //   ))}
                    // </ul>
                    <ul className='options'>
                      {posts.map(post => (
                        <li key={post.id} className='option-item'>{post.districtName}</li>
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

                <div className="select-btn" onClick={() =>
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

              {/* <div className="select">

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

            </div> */}


            </div>
            <button type='submit' className='submit-btn'><a href="#">Tətbiq et</a></button>

          </div>

          <div className="view">
            <div className="view_icons">
              <button className='view_btn' ref={compactBtn} onClick={gridActive}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11C4.45 11 3.979 10.804 3.587 10.412C3.19567 10.0207 3 9.55 3 9V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H9C9.55 3 10.021 3.19567 10.413 3.587C10.8043 3.979 11 4.45 11 5V9C11 9.55 10.8043 10.0207 10.413 10.412C10.021 10.804 9.55 11 9 11H5ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V15C3 14.45 3.19567 13.979 3.587 13.587C3.979 13.1957 4.45 13 5 13H9C9.55 13 10.021 13.1957 10.413 13.587C10.8043 13.979 11 14.45 11 15V19C11 19.55 10.8043 20.021 10.413 20.413C10.021 20.8043 9.55 21 9 21H5ZM15 11C14.45 11 13.9793 10.804 13.588 10.412C13.196 10.0207 13 9.55 13 9V5C13 4.45 13.196 3.979 13.588 3.587C13.9793 3.19567 14.45 3 15 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V9C21 9.55 20.8043 10.0207 20.413 10.412C20.021 10.804 19.55 11 19 11H15ZM15 21C14.45 21 13.9793 20.8043 13.588 20.413C13.196 20.021 13 19.55 13 19V15C13 14.45 13.196 13.979 13.588 13.587C13.9793 13.1957 14.45 13 15 13H19C19.55 13 20.021 13.1957 20.413 13.587C20.8043 13.979 21 14.45 21 15V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H15Z" fill="#333333" />
              </svg></button>
              <button className='view_btn' ref={cheatsheetBtn} onClick={listActive}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 19.5C4.08333 19.5 3.72933 19.354 3.438 19.062C3.146 18.7707 3 18.4167 3 18C3 17.5833 3.146 17.2293 3.438 16.938C3.72933 16.646 4.08333 16.5 4.5 16.5C4.91667 16.5 5.27067 16.646 5.562 16.938C5.854 17.2293 6 17.5833 6 18C6 18.4167 5.854 18.7707 5.562 19.062C5.27067 19.354 4.91667 19.5 4.5 19.5ZM8 19V17H21V19H8ZM4.5 13.5C4.08333 13.5 3.72933 13.354 3.438 13.062C3.146 12.7707 3 12.4167 3 12C3 11.5833 3.146 11.2293 3.438 10.938C3.72933 10.646 4.08333 10.5 4.5 10.5C4.91667 10.5 5.27067 10.646 5.562 10.938C5.854 11.2293 6 11.5833 6 12C6 12.4167 5.854 12.7707 5.562 13.062C5.27067 13.354 4.91667 13.5 4.5 13.5ZM8 13V11H21V13H8ZM4.5 7.5C4.08333 7.5 3.72933 7.354 3.438 7.062C3.146 6.77067 3 6.41667 3 6C3 5.58333 3.146 5.22933 3.438 4.938C3.72933 4.646 4.08333 4.5 4.5 4.5C4.91667 4.5 5.27067 4.646 5.562 4.938C5.854 5.22933 6 5.58333 6 6C6 6.41667 5.854 6.77067 5.562 7.062C5.27067 7.354 4.91667 7.5 4.5 7.5ZM8 7V5H21V7H8Z" fill="#333333" />
              </svg></button>
            </div>

            <div className="sort_selector">
              <div className="sortBy">
                <select className='sortBy-select' >
                  <option value=""> yüksək reytinqdən</option>
                  <option value=""> aşağı reytinqdən</option>
                </select>
              </div>
            </div>
          </div>

        </div>




      </section>

      <section className="gyms_section">
        {/* <div className="gym-wrapper">
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
        </div> */}


        <div className="gym-wrapper" ref={listView}>

          {gyms.map(gym => (

            <div key={gym.id} className="gym-container" ref={listGymContainer}>
              <Link to='/gymdetailed' ref={viewFlex}>
                <div className='gym-img'> <img src={gym.image} alt="" /></div>
                <div className="gym-body">
                  <p className='gym-title'>{gym.gymName}</p>
                  <p className='location'>{gym.gymLocation}</p>
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