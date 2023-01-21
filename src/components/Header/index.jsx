import {Link} from 'react-router-dom'
import '../../styles/Header.css'

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="../../assets/logo.svg" alt="logo" />
      <nav>
        <li>
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/APropos`}>APropos</Link>
        </li>
      </nav>
    </div>
  )
}

