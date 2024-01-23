import HeaderStyle from './Header.module.css';

const Header = () => {
  return (
    <>
        <div className={HeaderStyle.headerContent}>
            <h1 className={HeaderStyle.headerTitle}>RocketMovies</h1>
            <input className={HeaderStyle.headerSearch} type="text" placeholder='Pesquisar pelo título' />

            <div className={HeaderStyle.headerAvatar}>
                <span className={HeaderStyle.spanNameLogout}>
                    <p className={HeaderStyle.avatarName}>Marlus Weber</p>
                    <a className={HeaderStyle.avatarLogout} href="#">sair</a>
                </span>
                <img className={HeaderStyle.imgAvatar} src="https://avatars.githubusercontent.com/u/104041138?v=4" />
            </div>
        </div>
    </>
  )
}

export default Header