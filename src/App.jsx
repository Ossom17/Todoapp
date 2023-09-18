import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoApp } from './todo/ToDoApp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>My Todo Guide</h1>
      <ToDoApp />
      
    </>
  )
}

export default App
