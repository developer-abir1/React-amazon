import { useState } from 'react'
import { sampleProducts } from './data'
import { Link, RouterProvider } from 'react-router-dom'
import router from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
