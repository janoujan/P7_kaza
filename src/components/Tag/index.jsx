import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 40px;
`

const TagElement = styled.div`
  margin: auto;
  margin-left: 0px;
  height: max-content;
  width: max-content;
  padding: 5px 25px;
  border-radius: 10px;
  color: ${colors.tertary};
  background-color: ${colors.primary};
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`

export default function Tag({ accomodation }) {
  if (!accomodation) return

  return (
    <TagContainer>
      {accomodation.tags.map((tag, index) => (
        <TagElement key={index}>{tag}</TagElement>
      ))}
    </TagContainer>
  )
}
