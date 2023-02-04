import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as rootLoader } from './pages/Home'
import { loader as accomodationLoader } from './pages/Location'

import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Error'
import Location from './pages/Location'

const router = createBrowserRouter([
  {
    path: '/*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/location/:id',
    element: <Location />,
    errorElement: <ErrorPage />,
    loader: accomodationLoader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
