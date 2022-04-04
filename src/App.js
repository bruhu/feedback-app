import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
  const [feedback, setFeedback] = useState()
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}
export default App
