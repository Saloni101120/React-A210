import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React</h1>
      <About />
      <Contact />
      <Profile />
    </>
  )
}

export default App
