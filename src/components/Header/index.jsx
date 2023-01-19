import '../styles/App.css'

function Header () {
  return (
    <div>
      <img className='logo' src="../assets/logo.svg" alt="logo" />
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
