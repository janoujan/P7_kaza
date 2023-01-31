import React, { useState } from 'react'
import styled from 'styled-components'
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
`

const Arrow = styled.img`
  width: 30px;
`

export default function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Arrow
          src={isOpen ? arrowDown : arrowUp}
          alt={isOpen ? 'arrow down' : 'arrow up'}
        />
      </Button>
      {isOpen ? <Text>{text}</Text> : ''}
    </>
  )
}
