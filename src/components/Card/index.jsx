import { useFetch } from '../../utils/hooks'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  border: 1px solid black;
  width: 25%;
  height: 220px;
  margin: 20px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`

export default function Card({ cover, title, id }) {
  // const logements = useFetch(`logements.json`)
  // console.log(logements.data.Array)

  return (
    <>
      useEffect(() => {
      fetch(`logements.json`)
        .then((logements) => logements.json())
        .then((logements) => {
            
            return (
              <StyledLink to={`/:${logements.id}`}>
                <figure>
                  <img src={logements.cover} alt={logements.title} />
                  <figcaption>{logements.title}</figcaption>
                </figure>
              </StyledLink>
            )
          
        })
        .catch((error) => console.log(error))}

     ,[])
    </>
  )
}
