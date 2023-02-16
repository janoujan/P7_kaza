import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'
import fontFamily from '../utils/style/fontFamily'

import Header from '../components/Header'
import Flex from '../utils/style/displayFlex'

const ErrorPageContainer = styled.div`
  ${Flex};
  flex-direction: column;
  align-items: center;
  color: #ff6060;
`

const ErrorPageTitle = styled.h1`
  font-size: 9rem;
  font-family: ${fontFamily.fontFamily}, arial, verdana;
`
const ErrorPageSubtitle = styled.h2`
  font-family: ${fontFamily.fontFamily}, arial, verdana;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-inline: 5px;
    margin-top: -80px;
  }
`

const LinkToHome = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-family: ${fontFamily.fontFamily}, arial, verdana;

  @media screen and (max-width: 768px) {
    margin-top: 120px;
  }
`

const Break = styled.br`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
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
        <ErrorPageSubtitle>
          Oups! La page que<Break></Break> vous demandez n'existe pas.
        </ErrorPageSubtitle>
        <LinkToHome to={'/'}>Retourner sur la page d'accueil</LinkToHome>
        <p>
          <i>{error ? error.statusText || error.message : ''}</i>
        </p>
      </ErrorPageContainer>
    </>
  )
}
