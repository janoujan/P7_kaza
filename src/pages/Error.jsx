import { Link, useRouteError } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div id="error-page">
        <h1 className='errorTitle'>404</h1>
        <h2 className='errorSubtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to={'/'} className='errorLink'>Retourner sur la page d'accueil</Link>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  )
}
