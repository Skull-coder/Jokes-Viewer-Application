import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes')
      const data = await response.json()
      setJoke(data.data.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Jokes Viewer Application</h1>
      <div id='box'>
        {joke.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.content}</h2>
            <p>{joke.categories ? 
              joke.categories.join(', ')
            : ''}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
