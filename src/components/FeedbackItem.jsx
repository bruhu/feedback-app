import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem({item}) { 
  const {deleteFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={() => deleteFeedback(item.id)} color='purple'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem