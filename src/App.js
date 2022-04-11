import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      console.log('you deleted item id:', id)
    }
  }

  const addFeedback = (newFeedback) => {
    // set id
    newFeedback.id = uuidv4()
    // set new array w/ all existing items + new one at the beginning
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <Route path='/about' component={AboutPage}/>
      </div>
    </Router>
  )
}
export default App
