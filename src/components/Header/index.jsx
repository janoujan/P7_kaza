import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-left: 40px;
  width: 90%;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`
const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`

const HeaderLogo = styled.img`
  width: 180px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 95%;
    min-width: 80px;
  }
`


const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;

  @media screen and (max-width: 768px) {
    font-size: min(max(1rem, 4vw), 22px);
  }
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`
const NavList = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-end;
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
