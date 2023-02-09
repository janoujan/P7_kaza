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
import Location from './pages/Location'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='*' element={<ErrorPage />} errorElement={<ErrorPage />} />

      <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path='/accomodation/:id'
        element={<Location />}
        errorElement={<ErrorPage />}
      />
      <Route path='/about' element={<About />} errorElement={<ErrorPage />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
