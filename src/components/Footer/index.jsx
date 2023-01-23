import styled from "styled-components"

const FooterContainer = styled.div`
  position: relative;
  width: 93%;
  margin-left: 25px;
  top: 100px;
  height: 200px;
  background-color: #000000;
  color: white;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>footer</p>
    </FooterContainer>
  )
}
