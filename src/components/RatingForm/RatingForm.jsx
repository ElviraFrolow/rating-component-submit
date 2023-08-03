import React from 'react'
import StarIcon from "../../images/icon-star.svg"
import "./RatingForm.css"
import RatingButtonComponent from '../RatingButtonComponent/RatingButtonComponent'

function RatingForm() {
  return (
    <div className='component-wrapper'>
      <form className='form-body'>
        <div className='star-icon'>
         <img src={StarIcon} alt="Star-Icon" />
        </div>
        <div>
            <p className='headline-element'>How did we do?</p>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our</p>
        </div>
        <div>
        <RatingButtonComponent/>
            <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RatingForm
