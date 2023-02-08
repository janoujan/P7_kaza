import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Await } from 'react-router-dom'
import React from 'react'

import Card from '../Card'
import SpinLoader from '../SpinLoader'
import ErrorPage from '../../pages/Error'

const GalleryContainer = styled.div`
  position: relative;
  width: 93%;
  margin-left: 20px;
  height: fit-content;
  top: 70px;
  background-color: ${colors.secondary};
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    background-color: ${colors.tertary};
  }
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
    //margin-right: 1rem;
  }
`

export default function Gallery({ data }) {
  
 if (!data) return <ErrorPage />
 
  return (
    <GalleryContainer>
      {
        <GalleryUl>
          {data.map((accomodation) => (
            <Card key={accomodation.id} location={accomodation} />
          ))}
        </GalleryUl>
      }
    </GalleryContainer>
  )
}
