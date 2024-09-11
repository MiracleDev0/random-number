import { useState } from 'react'
import './App.css'
import RandomNumberGenerator from './components/RandonNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomNumberGenerator />
    </>
  )
}

export default App
