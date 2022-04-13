import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  // calculate ratings average
  let average = feedback.reduce((accumulator, current) => {
    return accumulator + current.rating
  }, 
  // set accumulator default to 0
  0) / feedback.length

  // display max 1 decimal
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
    </div>
  )
}

export default FeedbackStats