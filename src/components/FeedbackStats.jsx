function FeedbackStats({feedback}) {
  // calculate ratings average
  let average = feedback.reduce((accumulator, current) => {
    return accumulator + current.rating
  }, 
  // default for the accumulator = 0
  0) / feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
    </div>
  )
}

export default FeedbackStats