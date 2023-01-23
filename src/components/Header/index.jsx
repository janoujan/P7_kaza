import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  margin-left: 40px;
`
const HeaderLogo = styled.img`
  width: 180px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: flex-start;
`

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  width: 100%;
`

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  font-size: large;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active
   {
    text-decoration: underline;
  }
`
const NavList = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px;
  list-style: none;
`

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to={`/`}>
        <HeaderLogo src={logo} alt="logo" />
      </NavLink>
      <HeaderNav>
        <NavList>
          <StyledLink to={`/`}>Accueil</StyledLink>
        </NavList>
        <NavList>
          <StyledLink to={`/about`}>APropos</StyledLink>
        </NavList>
      </HeaderNav>
    </HeaderContainer>
  )
}

