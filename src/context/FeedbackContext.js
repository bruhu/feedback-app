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
  return (
    <FeedbackContext.Provider
      value={
        {
          // everything we want to pass in
        }
      }
    >
      {/* children = all the components that will access our context */}
      {children}
    </FeedbackContext.Provider>
  )
}
