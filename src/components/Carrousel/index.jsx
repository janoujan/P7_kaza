import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import arrowPrevious from '../../assets/arrowPrevious.svg'
import arrowNext from '../../assets/arrowNext.svg'

const CarrouselContainer = styled.div`
  position: relative;
  top: 70px;
  height: 415px;
  width: 93%;
  margin-left: 25px;
  border-radius: 25px;
`
const ArrowPrevious = styled.img`
  position: absolute;
  margin-left: 3%;
  left: 0%;
`

const ButtonPrevious = styled.button`
  position: absolute;
  left: 3%;
  display: flex;
  align-items: center;
`

const ArrowNext = styled.img`
  margin-right: 3%;
  position: absolute;
  right: 5%;
`
const ButtonNext = styled.button`
  position: absolute;
  right: 5%;
  display: flex;
  align-items: center;
`

const CarrouselFigure = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CarrouselImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`

export default function Carrousel({ logement }) {
  const [activeIndex, setActiveIndex] = useState(0)
  console.log(logement.pictures[activeIndex])

  return (
    <CarrouselContainer>
      <CarrouselFigure>
        <CarrouselImage
          src={logement.pictures[activeIndex]}
          alt={logement.title}
        />
        <ButtonPrevious>
          <ArrowPrevious
            src={arrowPrevious}
            alt="arrow to previous picture"
            onClick={() => setActiveIndex(activeIndex + 1)}
          />
        </ButtonPrevious>
        <ButtonNext>
          <ArrowNext
            src={arrowNext}
            alt="arrow to next picture"
            onClick={() => setActiveIndex(activeIndex - 1)}
          />
        </ButtonNext>
      </CarrouselFigure>
    </CarrouselContainer>
  )
}
