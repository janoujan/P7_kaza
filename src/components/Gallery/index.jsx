import styled from 'styled-components'
import Card from '../Card'

const CardContainer = styled.div`
  display: flex;
  position: relative;
  width: 93%;
  margin-left: 25px;
  height: 600px;
  top: 70px;
  background-color: grey;
  border-radius: 25px;
`

export default function Gallery() {
  return (
    <>
      <CardContainer>
        <Card />
      </CardContainer>
    </>
  )
}
