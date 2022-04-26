import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 6,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // add feedback item
  const addFeedback = (newFeedback) => {
    // set id
    newFeedback.id = uuidv4()
    // set new array w/ all existing items + new one at the beginning
    setFeedback([newFeedback, ...feedback])
  }

  // delete feedback item
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      console.log('you deleted item id:', id)
    }
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {/* children = all the components that will access our context */}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
