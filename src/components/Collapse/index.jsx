import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import arrowDown from '../../assets/dropdown_close.svg'
import arrowUp from '../../assets/dropdown_open.svg'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 3%;
  margin-bottom: 40px;
  height: 50px;
  border-radius: 5px;
  background-color: ${colors.primary};

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    width: -webkit-fill-available;
  }
`

const Title = styled.h2`
  background: #ff6060;
  border-radius: 5px;
  margin: 0;
  padding-top: 7px;
  padding-left: 2%;
  font-family: ${fontFamily.fontFamily};
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.secondary};
`

const Text = styled.p`
  margin-top: -40px;
  padding: 20px;
  padding-left: 5%;
  border-radius: 5px;
  font-family: ${fontFamily.fontFamily};
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.primary};
  background-color: ${colors.secondary};

  @media screen and (max-width: 768px) {
    position: relative;
    top: 25px;
    margin-block-end: 60px;
  }
`

const flip = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

const Arrow = styled.img`
  width: 30px;
  animation: ${flip} 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`

export default function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Arrow
          src={isOpen ? arrowUp : arrowDown}
          alt={isOpen ? 'arrow up' : 'arrow down'}
          isOpen={isOpen}
        />
      </Button>
      {isOpen ? <Text>{text}</Text> : ''}
    </>
  )
}
