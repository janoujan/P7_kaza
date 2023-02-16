import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const glowing = keyframes`
   0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
`
const CardList = styled.li`
  list-style: none;

  @media screen and (max-width: 768px) {
    width: -moz-available;
    width: -webkit-fill-available;
  }
`
const CardFigure = styled.figure`
  max-width: 340px;
  height: 340px;
  position: relative;
  margin: 20px;
  transition: transform 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  &:hover {
    transform: scale(1.02);
    animation: ${glowing} 20s linear infinite;

    &::before {
      content: '';
      background: linear-gradient(
        45deg,
        ${colors.primary},
        ${colors.primary},
        ${colors.primary},
        ${colors.primary},
        ${colors.black},
        ${colors.primary},
        ${colors.primary},
        ${colors.primary},
        ${colors.primary}
      );
      position: absolute;
      top: -4px;
      left: -3px;
      background-size: 150%;
      z-index: -1;
      filter: blur(3px);
      width: calc(100% + 6px);
      height: calc(90% + 42px);
      animation: ${glowing} 20s linear infinite;
      transition: opactiy 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: 5px;
    margin-bottom: 10px;
    top: -40px;
    height: 255px;
    width: 100%;
    max-width: 98%;
    &:hover {
      &::before {
        height: calc(90% + 32px);
      }
    }
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`
const CardCaption = styled.figcaption`
  position: absolute;
  font-weight: 500;
  font-family: ${fontFamily.fontFamily};
  bottom: 15px;
  margin-left: 16px;
  margin-right: 10px;
  font-size: 18px;
  color: ${colors.tertary};
`

export default function Card({ location }) {
  return (
    <>
      <CardList key={location.id}>
        <NavLink to={`/accomodation/${location.id}`}>
          <CardFigure>
            <CardImage src={location.cover} alt={location.title} />
            <CardCaption>{location.title}</CardCaption>
          </CardFigure>
        </NavLink>
      </CardList>
    </>
  )
}
