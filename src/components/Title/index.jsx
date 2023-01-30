import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const TitleContainer = styled.div`
  position: relative;
  margin-left: 40px;
`

const LocationTitle = styled.h1`
  font-family: ${fontFamily.fontFamily};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  color: ${colors.primary};
`

const LocationPlace = styled.h2`
  font-family: ${fontFamily.fontFamily};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0px;
  color: ${colors.primary};
`

export default function Title({ accomodation }) {
  if (!accomodation) return
  
  return (
    <TitleContainer>
      <LocationTitle>{accomodation.title}</LocationTitle>
      <LocationPlace>{accomodation.location}</LocationPlace>
    </TitleContainer>
  )
}
