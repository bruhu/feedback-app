
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About the Project</h1>
        <p>This is a React app to leave product and service feedback</p>
        <p>v1.0.0</p>
        <p>
          <Link to='/'>Take me back to the home page</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage