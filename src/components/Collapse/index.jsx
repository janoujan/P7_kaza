import React, { useState } from 'react'
import styled from 'styled-components'
import arrowDown from '../../assets/dropdown_close.svg'
import arrowUp from '../../assets/dropdown_open.svg'
import colors from '../../utils/style/colors'

const CollapseContainer = styled.div`
  border: 1px solid black;
  position: relative;
  width: 73%;
  top: 70px;
  margin: auto;
`

const TitleContainer = styled.div`
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

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;

  color: ${colors.secondary};
`

const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;

  margin: 0px;
  padding: 20px;
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
      <TitleContainer>
        <Title>{title}</Title>
        <Arrow src={arrowUp} alt="arrow down" />
      </TitleContainer>
      <Text>{text}</Text>
    </CollapseContainer>
  )
}
