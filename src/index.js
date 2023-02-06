import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import { loader as rootLoader } from './pages/Home'
import { loader as accomodationLoader } from './pages/Location'
import { Fragment } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Error'
import Location from './pages/Location'
import Header from './components/Header'
import Footer from './components/Footer'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route  path='*' element={<ErrorPage />} errorElement={<ErrorPage />} />
 
      <Route
        path='/'
        element={<Home />}
        errorElement={<ErrorPage />}
        loader={rootLoader}
      />
      <Route
        path='/accomodation/:id'
        element={<Location />}
        errorElement={<ErrorPage />}
        loader={accomodationLoader}
      />
      <Route path='/about' element={<About />} errorElement={<ErrorPage />} />

    </>
    // ====================================================================/
    // <>
    //   <Route
    //     path='*'
    //     element={<ErrorPage />}
    //     // errorElement={<ErrorPage />}
    //   />
    //   <Route
    //     path='/'
    //     element={<Home />}
    //     errorElement={<ErrorPage />}
    //     loader={rootLoader}
    //   >
    //     <Route
    //       path='accomodation/:id'
    //       element={<Location />}
    //       errorElement={<ErrorPage />}
    //       loader={accomodationLoader}
    //     />
    //   </Route>
    //   <Route path='/about' element={<About />} errorElement={<ErrorPage />} />
    // </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
//  [
// {
//   path: '/*',
//   element: <ErrorPage />,
//   errorElement: <ErrorPage />
// },
// {
//   path: '/',
//   element: <Home />,
//   errorElement: <ErrorPage />,
//   loader: rootLoader
// },
// {
//   path: '/about',
//   element: <About />,
//   errorElement: <ErrorPage />
// },
// {
//   path: '/location/:id',
//   element: <Location />,
//   errorElement: <ErrorPage />,
//   loader: accomodationLoader
// }
// ]
// ^^^^^^^^^^^^try with object syntax^^^^
// =======================================
