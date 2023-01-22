import '../../styles/Gallery.css'
import {NavLink, useParams } from 'react-router-dom'

export default function Gallery({ cover, title }) {
  let { locationId } = useParams()
  
  return (
    <div className="gallery">
      <NavLink to={`/:${locationId}`} className="card">
        <figure>
          <img src={cover} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </NavLink>
    </div>
  )
}
