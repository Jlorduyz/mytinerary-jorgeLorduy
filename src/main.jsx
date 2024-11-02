import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './layouts/errorPage'
import { Root } from './layouts/root'
import { Cities } from './pages/cities'
import { Home } from './pages/home'
import { City } from './pages/city'
import { Provider } from 'react-redux'
import store from './store/store'

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: '/cities',
      element: <Cities />
    },
    {
      path: '/cities/:name',
      element: <City />
    }, {
      path: '/',
      element: <Home />
    }
  ]
}, {
  path: '/*',
  element: <ErrorPage />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
