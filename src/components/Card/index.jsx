import {NavLink, useParams } from 'react-router-dom'
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

// try {
//   const response = fetch('../data/logements.json')
//   console.log(response)
//   const locations = response.json()
//   console.log(locations)
//   // return await locations
// } catch (error) {
//   throw new Error(error)
// }    

export default function Card({ cover, title }) {
   // console.log(GetDataAsLocations())
   let { locationId } = useParams()
    return (
      <>
        <StyledLink to={`/:${locationId}`} className="Card_link">
          <figure className='Card_figure'>
            <img src={cover} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        </StyledLink>
      </>
    )
}
