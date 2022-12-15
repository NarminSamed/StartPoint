import React from 'react'
import { gymsData } from './gymsData'

const List = () => {
  return (
    <div className='list'>
         {gymsData.map((grid, index) => {
        return (
            <div className='list_card'>
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
        )
    })}
    </div>
  )
}

export default List