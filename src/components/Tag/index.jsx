import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const TagContainer = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: -20px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    width: -webkit-fill-available;
    flex-wrap: wrap;
  }
`

const TagElement = styled.div`
  width: max-content;
  height: max-content;
  margin-left: 0px;
  margin-right: 20px;
  padding: 5px 25px;
  border-radius: 10px;
  text-align: center;
  font-family: ${fontFamily.fontFamily};
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${colors.tertary};
  background-color: ${colors.primary};

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`

export default function Tag({ accomodation }) {
  return (
    <TagContainer>
      {accomodation.tags.map((tag, index) => (
        <TagElement key={index}>{tag}</TagElement>
      ))}
    </TagContainer>
  )
}
