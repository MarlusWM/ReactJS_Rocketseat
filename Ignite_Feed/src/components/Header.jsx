import HeaderStyle from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

const Header = () => {
  return (
    <>
        <header className= {HeaderStyle.header}>
          <img src={igniteLogo} alt="Logo Ignite" />
          <h1>Ignite Feed</h1>
        </header>
    </>
  )
}

export default Header