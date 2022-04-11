import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About the Project</h1>
        <p>This is a React app to leave product feedback</p>
        <p>v1.0.0</p>
        <p>
          <a href='/'>Take me back to the home page</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage