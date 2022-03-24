import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
        <p>{text}</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header