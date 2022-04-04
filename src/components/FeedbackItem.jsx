import { useState } from "react"

function FeedbackItem() {
const [rating, setRating] = useState(7)
const [text, setText] = useState('This is an example of a feedback item.')

const handleClick = () => {
  setRating(89)
}

  // using this instead of just the value for new state allows you to access previous state
const handleClickyClick = () => {
  setRating((prev) => {
    return prev + 1
  })
}

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Update rating</button>
      <button onClick={handleClickyClick}>Rating + 1</button>
    </div>
  )
}

export default FeedbackItem