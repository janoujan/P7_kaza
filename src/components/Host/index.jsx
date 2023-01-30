import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HostContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 3%;
`

const HostName = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
  width: min-content;
  margin-right: 20px;
  color: ${colors.primary};
`

const HostPicture = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
`

export default function Host({ accomodation }) {
  if (!accomodation) return

  return (
    <HostContainer>
      <HostName>{accomodation.host.name}</HostName>
      <HostPicture src={accomodation.host.picture} alt={accomodation.host.name} />
    </HostContainer>
  )
}
