function App() {
  const comments = [
    { id: 1, text: 'one' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' },
  ]

  const loading = false
  const showComments = true

  if (loading) return <p>Loading...</p>

  return (
    <div className='container'>
      <h1>My Feedback App</h1>

      {showComments && (
        <div className='comments'>
          <h3>Comments ({comments.length})</h3>

          <ul></ul>
          {comments.map((comment, index) => (
            <li key={index}>Comment {comment.text}</li>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
