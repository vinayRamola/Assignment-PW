import { useState } from 'react'
import './App.css'

import CustomRoutes from './Routes/CustomRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-body'>  
      <div className='main-heading'><h1>Bird Watchers Hub</h1></div>
        <CustomRoutes />
    </div>
  )
}

export default App
