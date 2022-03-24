

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

export default Header