import React from 'react'
import { feedbackData } from '../feedbackData'
import StarRatings from 'react-star-ratings'



const Rating = () => {
  return (
    <>
      <div className="rating__hero">
        <h1>CH Fitness</h1>
        <p className='gym-dtl_location'>Yeni Günəşli, Xalqlar dostluğu 47n</p>
      </div>
      <div className="gym_feedback__container">
        <div className="gym_feedback__hero">
          <h2>Zalın qiymətləndirilməsi</h2>
          <div className="gym_feedback__rayting">
            <div className="rating_number">
              <span>4.3</span>
            </div>
            <StarRatings
              starDimension="20px"
              starSpacing="3px"
              starRatedColor='rgb(216, 15, 45)'
              starEmptyColor='rgb(203, 211, 227)'
              numberOfStars={5}
              rating={4.3}
            />


          </div>
        </div>

        <div className="gym_feedback__wrapper">
          {feedbackData.map((feedbackData, i) => (
            <div key={feedbackData.id} className="gym_feedback__">
              <div className="gym_feedback__main">
                <p>{feedbackData.name}</p>
                <span>{feedbackData.comment}</span>
                <span className='feedback__date'>{feedbackData.date}</span>
              </div>
              <div className="gym_feedback_rating">

                <StarRatings
                  rating={feedbackData.starCount}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor='rgb(216, 15, 45)'
                  starEmptyColor='rgb(203, 211, 227)'
                />

                <div className="like_number">
                  <span>{feedbackData.like}</span>
                  <i className="fa-solid fa-thumbs-up"></i>
                </div>

              </div>
            </div>
          ))}

          <a href="#">Komentlərin hamısına bax</a>
        </div>
      </div>
    </>
  )
}

export default Rating