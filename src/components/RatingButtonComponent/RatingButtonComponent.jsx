import React from 'react'
import './RatingButtonComponent.css'
import {useState} from 'react'

function RatingButtonComponent() {
    const [rating, setRating] = useState(0)

  return (
             <div className='rating-button'>
               <div className='rating-button-component'>1</div>
               <div className='rating-button-component'>2</div>
               <div className='rating-button-component'>3</div>
               <div className='rating-button-component'>4</div>
               <div className='rating-button-component'>5</div>
            </div>
  )
}

export default RatingButtonComponent
