import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Home />} path='/' errorElement={<ErrorPage />} />
      <Route element={<About />} path='/about' errorElement={<ErrorPage />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
