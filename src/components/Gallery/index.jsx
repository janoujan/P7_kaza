import styled from 'styled-components'
import colors from '../../utils/style/colors'
import React from 'react'

import Card from '../Card'
import MarginLeft from '../../utils/style/marginLeft'
import Flex from '../../utils/style/displayFlex'

const GalleryContainer = styled.div`
  position: relative;
  width: 93%;
  margin-left: ${MarginLeft.desktop};
  height: fit-content;
  top: 70px;
  background-color: ${colors.secondary};
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-left: ${MarginLeft.mobile};
    background-color: ${colors.tertary};
  }
`

const GalleryUl = styled.ul`
  ${Flex};
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
        {/* here we map data to display accomodations */}
        {data.map((accomodation) => (
          <Card key={accomodation.id} location={accomodation} />
        ))}
      </GalleryUl>
    </GalleryContainer>
  )
}
