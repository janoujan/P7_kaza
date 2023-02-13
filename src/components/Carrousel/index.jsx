import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import arrowPrevious from '../../assets/arrowPrevious.svg'
import arrowNext from '../../assets/arrowNext.svg'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const CarrouselContainer = styled.div`
  position: relative;
  top: 20px;
  height: 425px;
  width: 93%;
  margin-left: 60px;
  border-radius: 25px;
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    width: -webkit-fill-available;
    width: -moz-available;
    height: 255px;
    margin-left: 20px;
    margin-right: 1rem;
    top: 0;
  }
`

const ArrowPrevious = styled.img`
  position: absolute;
  margin-left: 3%;
  left: 0%;

  @media screen and (max-width: 768px) {
    width: 15px;
    height: 25px;
  }
`

const ArrowNext = styled.img`
  margin-right: 3%;
  position: absolute;
  right: 5%;

  @media screen and (max-width: 768px) {
    width: 15px;
    height: 25px;
  }
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
const CarrouselPosition = styled.div`
  color: ${colors.tertary};
  position: absolute;
  width: 45px;
  left: 47%;
  bottom: 5%;
  font-family: ${fontFamily.fontFamily};
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export default function Carrousel({ accomodation }) {
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * a function to handle button click
   * @param {Number} activeIndex
   * @returns  either activeIndex -1 or go back to lastIndex
   */
  const toPrevious = (activeIndex) => {
    const lastIndex = accomodation.pictures.length - 1
    return activeIndex < 1 ? lastIndex : activeIndex - 1
  }

  /**
   * a function to handle button click
   * @param {Number} activeIndex
   * @returns  either activeIndex + 1 or go back to firstIndex
   */
  const toNext = (activeIndex) => {
    const lastIndex = accomodation.pictures.length - 1
    return activeIndex < lastIndex ? activeIndex + 1 : 0
  }

  // if there is only one picture in picture's array,
  // navigation arrows are no longer needed so we use a ternary condition
  return accomodation.pictures.length === 1 ? (
    <CarrouselContainer>
      <CarrouselFigure>
        <CarrouselImage
          src={accomodation.pictures[activeIndex]}
          alt={accomodation.title}
        />
        <CarrouselPosition>
          {activeIndex + 1} / {accomodation.pictures.length}
        </CarrouselPosition>
      </CarrouselFigure>
    </CarrouselContainer>
  ) : (
    <CarrouselContainer>
      <CarrouselFigure>
        <CarrouselImage
          src={accomodation.pictures[activeIndex]}
          alt={accomodation.title}
        />
        <ArrowPrevious
          src={arrowPrevious}
          alt="arrow to previous picture"
          onClick={() => setActiveIndex(toPrevious(activeIndex))}
        />
        <CarrouselPosition>
          {activeIndex + 1} / {accomodation.pictures.length}
        </CarrouselPosition>
        <ArrowNext
          src={arrowNext}
          alt="arrow to next picture"
          onClick={() => setActiveIndex(toNext(activeIndex))}
        />
      </CarrouselFigure>
    </CarrouselContainer>
  )
}
