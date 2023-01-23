import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff6060;
`

const ErrorPageTitle = styled.h1`
  font-size: 12rem;
`

const LinkToHome = styled(Link)`
  color: #FF6060;
`

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <ErrorPageContainer>
        <ErrorPageTitle>404</ErrorPageTitle>
        <h2 className='errorSubtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <LinkToHome to={'/'} className='errorLink'>Retourner sur la page d'accueil</LinkToHome>
        <p>
          <i>{error ? error.statusText || error.message : ''}</i>
        </p>
      </ErrorPageContainer>
    </>
  )
}
