import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item comes from FeedbackContext',
      rating: 10,
    },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      console.log('you deleted item id:', id)
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        // everything we want to pass in
        feedback,
        deleteFeedback,
      }}
    >
      {/* children = all the components that will access our context */}
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
