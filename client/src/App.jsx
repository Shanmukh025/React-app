import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout />
    </>
  )
}

export default App
