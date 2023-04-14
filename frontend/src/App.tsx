import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <div>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  )
}

export default App
