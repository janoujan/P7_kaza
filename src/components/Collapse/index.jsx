import React, { useState } from 'react'
import styled from 'styled-components'
import arrowDown from '../../assets/dropdown_close.svg'
import arrowUp from '../../assets/dropdown_open.svg'
import colors from '../../utils/style/colors'
import fontFamily from '../../utils/style/fontFamily'

const CollapseContainer = styled.div`
  position: relative;
  width: 73%;
  top: 70px;
  margin: auto;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 93%;
    margin-left: 20px;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 3%;
  height: 50px;
  border-radius: 5px;
  background-color: ${colors.primary};
`

const Title = styled.h2`
  background: #ff6060;
  border-radius: 5px;
  margin: 0;
  padding-top: 7px;
  // DRY
  font-family: ${fontFamily.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;

  color: ${colors.secondary};
`

const Text = styled.p`
  // DRY
  font-family: ${fontFamily.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;

  margin: 0;
  padding: 20px;
  border-radius: 5px;
  color: ${colors.primary};
  background-color: ${colors.secondary};
`

const Arrow = styled.img`
  width: 30px;
`

export default function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CollapseContainer>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Arrow
          src={isOpen ? arrowDown : arrowUp}
          alt={isOpen ? 'arrow down' : 'arrow up'}
        />
      </Button>
      {isOpen ? <Text>{text}</Text> : ''}
    </CollapseContainer>
  )
}
