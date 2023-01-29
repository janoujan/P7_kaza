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
  font-size: 9rem;
  font-family: 'Montserrat', arial, verdana;
`
const ErrorPageSubtitle = styled.h2`
  font-family: 'Montserrat', arial, verdana;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-inline: 5px;
    margin-top: -80px;
  }
`

const LinkToHome = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-family: 'Montserrat', arial, verdana;

  @media screen and (max-width: 768px) {
    margin-top: 120px;
  }
`

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <ErrorPageContainer>
        <ErrorPageTitle>404</ErrorPageTitle>
        <ErrorPageSubtitle>Oups! La page que vous demandez n'existe pas.</ErrorPageSubtitle>
        <LinkToHome to={'/'} className='errorLink'>Retourner sur la page d'accueil</LinkToHome>
        <p>
          <i>{error ? error.statusText || error.message : ''}</i>
        </p>
      </ErrorPageContainer>
    </>
  )
}
