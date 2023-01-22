import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

export default function Header() {
  return (
    <div className="header">
      <NavLink to={`/`}>
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <nav className="header-nav">
        <li>
          <NavLink to={`/`}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>APropos</NavLink>
        </li>
      </nav>
    </div>
  )
}

