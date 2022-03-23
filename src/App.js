function App() {
  const comments = [
    { id: 1, text: 'one' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' },
  ]
  return (
    <div className='container'>
      <h1>My Feedback App</h1>
      <p>Here's a paragraph - did it solve the issue?</p>

      <div className='comments'>
        <h3>Comments ({comments.length})</h3>

        <ul></ul>
        {comments.map((comment, index) => (
          <li key={index}>Comment {comment.text}</li>
        ))}
      </div>
    </div>
  )
}

export default App
