import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'


export default function Carrousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  )
}
