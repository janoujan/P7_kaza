import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const HostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
  right: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    height: min-content;
  }

  @media screen and (min-width: 1440px) {
    right: 1.6rem;
  }
`

const HostName = styled.p`
  width: min-content;
  margin-right: 20px;
  text-align: right;
  font-family: ${fontFamily.fontFamily};
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: ${colors.primary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 10px;
  }
`

const HostPicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

export default function Host({ accomodation }) {
  return (
    <HostContainer>
      <HostName>{accomodation.host.name}</HostName>
      <HostPicture
        src={accomodation.host.picture}
        alt={accomodation.host.name}
      />
    </HostContainer>
  )
}
