import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'
import Flex from '../../utils/style/displayFlex'
import MarginLeft from '../../utils/style/marginLeft'

const HeaderContainer = styled.div`
  ${Flex};
  justify-content: space-between;
  height: 80px;
  margin-left: ${MarginLeft.desktop};
  width: 90%;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`

const HeaderNav = styled.nav`
  position: relative;
  ${Flex};
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  right: -3.5%;

  @media screen and (max-width: 768px) {
    width: -webkit-fill-available;
    width: -moz-available;
    margin-right: 0.5em;
  }
`

const HeaderLogo = styled.img`
  width: 180px;
  height: 80px;
  position: relative;
  ${Flex};
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 95%;
    min-width: 100px;
  }
`

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  text-decoration: none;
  font-family: ${fontFamily.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  &.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: min(max(0.5rem, 3.7vw), 18px);
    ${Flex};
    justify-content: flex-start;
    margin: 0px;
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const NavList = styled.li`
  position: relative;
  ${Flex};
  justify-content: flex-end;
  align-items: center;
  margin: 20px;
  list-style: none;

  @media screen and (max-width: 768px) {
    margin-inline: 0.5rem;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link to={`/`}>
        <HeaderLogo src={logo} alt="logo" />
      </Link>
      <HeaderNav>
        <NavList>
          <StyledLink
            to={`/`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Acceuil
          </StyledLink>
        </NavList>
        <NavList>
          <StyledLink
            to={`/about`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            A Propos
          </StyledLink>
        </NavList>
      </HeaderNav>
    </HeaderContainer>
  )
}
