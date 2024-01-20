import HeaderStyle from "./Header.module.css";
import {Power} from "phosphor-react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      
      <div className={HeaderStyle.notePreview}>
        <Link to='/profile'>
            <img src="https://avatars.githubusercontent.com/u/104041138?v=4"
            alt="foto usuário" />
          <div className={HeaderStyle.welcome}>
            <span>Bem vindo</span>
            <strong>Marlus W Midginski</strong>
          </div>
        </Link>        

        <div className={HeaderStyle.logout}>
            <Link to='/signin'>
              <Power size={32} />
            </Link>
        </div>
      </div>
      
    </>
  )
}

export default Header