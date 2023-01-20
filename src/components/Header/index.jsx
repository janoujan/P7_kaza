import '../../styles/Header.css'

function Header () {
  return (
    <div className='header'>
      <img className='logo' src="../../assets/logo.svg" alt="logo" />
      <nav>
        <ul>
          <li>Acceuil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
