import HeaderStyle from "./Header.module.css";
import {Power} from "phosphor-react";

const Header = () => {
  return (
    <>        
      <div className={HeaderStyle.notePreview}>
        <img src="https://avatars.githubusercontent.com/u/104041138?v=4"
        alt="foto usuário" />
        <div className={HeaderStyle.welcome}>
          <span>Bem vindo</span>
          <strong>Marlus W Midginski</strong>
        </div>

        <div className={HeaderStyle.logout}>
            <Power size={32} />
        </div>
      </div>      
    </>
  )
}

export default Header