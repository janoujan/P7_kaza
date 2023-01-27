import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logoFooter.svg'

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
  height: 210px;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <NavLink to={`/`}>
        <img src={logo} alt="logo" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}
