import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './layouts/errorPage'
import { Root } from './layouts/root'
import { Cities } from './pages/cities'
import { Home } from './pages/home'
import { City } from './pages/city'
import Entry from './pages/entry'
import { Provider } from 'react-redux'
import store from './store/store'
import LogRoute from './components/logRoute.jsx'
import PrivateRouter from './components/PrivateRouter.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: '/cities',
      element: <PrivateRouter><Cities /></PrivateRouter>
    },
    {
      path: '/cities/:name',
      element: <PrivateRouter><City /></PrivateRouter>
    }, {
      path: '/',
      element: <Home />
    },{
    path: '/log',
      element: <LogRoute><Entry/></LogRoute>
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
