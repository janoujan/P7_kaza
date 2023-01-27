import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Card from '../Card'

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 93%;
  margin-left: 25px;
  height: fit-content;
  top: 70px;
  background-color: grey;
  border-radius: 25px;
`

const GalleryUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  background-color: $color-tertiary;
  padding: 32px 16px;
  border-radius: 25px;
  max-width: 1240px;
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
