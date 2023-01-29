import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Card from '../Card'

const GalleryContainer = styled.div`
  position: relative;
  width: 93%;
  margin-left: 25px;
  height: fit-content;
  top: 70px;
  background-color: ${colors.secondary};
  border-radius: 25px;
`

const GalleryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${colors.secondary};
  padding: 32px 16px;
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    background-color: ${colors.tertary};
    padding: 0px;
    margin-top: -10px;
  }
`

export default function Gallery({ data }) {
  return (
    <GalleryContainer>
      <GalleryUl>
        {data.map((location) => (
          <Card key={location.id} location={location} />
        ))}
      </GalleryUl>
    </GalleryContainer>
  )
}
