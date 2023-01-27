import React from 'react'
import { useEffect, useState } from 'react'
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
`

export default function Gallery() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('logements.json')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [])

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
