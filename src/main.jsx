import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './layouts/errorPage'
import { Root } from './layouts/root'
import { Cities } from './pages/cities'
import { Home } from './pages/home'
import { CityDescription } from './pages/city'

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path:'/cities',
      element: <Cities />
    },
    {
      path:'/cities/:name',
      element: <CityDescription />
    },{
      path: '/',
      element: <Home />
    }
  ]
},{
  path: '/*',
  element: <ErrorPage />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
