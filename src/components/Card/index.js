import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const CardList = styled.li`
  list-style: none;
  
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
  }

@media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 50px;
    max-width: 335px;
    min-width: 70%;
    height: 255px;
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

export default function Card ({ location }) {
  return (
    <CardList>
      <NavLink key={location.id} to={`/${location.id}`}>
        <CardFigure>
          <CardImage src={location.cover} alt={location.title} />
          <CardCaption>{location.title}</CardCaption>
        </CardFigure>
      </NavLink>
    </CardList>
  )
}
