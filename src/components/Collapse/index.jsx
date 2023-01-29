import React, { useState } from 'react'
import styled from 'styled-components'
import arrowDown from '../../assets/dropdown_close.svg'
import arrowUp from '../../assets/dropdown_open.svg'
import colors from '../../utils/style/colors'

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
  border-radius: 5px;
  color: ${colors.primary};
  background-color: ${colors.secondary};
`

const Arrow = styled.img`
  width: 30px;
`

export default function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
    <CollapseContainer>
      <Button onClick={() => setIsOpen(false)}>
        <Title>{title}</Title>
        <Arrow src={arrowDown} alt="arrow down" />
      </Button>
    </CollapseContainer>
  ) : (
    <CollapseContainer>
      <Button onClick={() => setIsOpen(true)}>
        <Title>{title}</Title>
        <Arrow src={arrowUp} alt="arrow up" />
      </Button>
      <Text>{text}</Text>
    </CollapseContainer>
  )
}
