import { useState } from 'react'

import './App.css'
import EcomDashboard from './components/EcomDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EcomDashboard/>
    </>
  )
}

export default App
