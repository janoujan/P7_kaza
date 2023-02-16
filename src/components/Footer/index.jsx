import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logoFooter.svg'
import Flex from '../../utils/style/displayFlex'

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
  height: 210px;
  background-color: #000000;
  color: white;
  ${Flex};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoLink = styled(NavLink)`
  transition: transform 0.25s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <LogoLink to={`/`}>
        <img src={logo} alt="logo" />
      </LogoLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}
