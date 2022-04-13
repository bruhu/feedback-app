import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({handleDelete}) {
  // extract from FeedbackContext's value
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return(<p>There's no feedback yet.</p>)
  }
  
  return (
    <div className='feedback-list'>
      <AnimatePresence>
    {feedback.map((item) => (
      <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}      
      >
      <FeedbackItem key={item.id} item={item} 
      handleDelete={handleDelete}/>
      </motion.div>
    ))}
    
      </AnimatePresence>
    </div>
  )

  // version without animation
  // return (
  //   <div className='feedback-list'>
  //   {feedback.map((item) => (
  //     <FeedbackItem key={item.id} item={item} 
  //     handleDelete={handleDelete}/>
  //   ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
  // arrayOf instead of array allows you to define exactly how the array has to be constructed
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList