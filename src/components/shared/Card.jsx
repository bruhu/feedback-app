import PropTypes from 'prop-types'


// styled component

function Card({children, reverse}) {
  return (
    // conditional class
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>

    // conditional style    
    <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000'}}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card