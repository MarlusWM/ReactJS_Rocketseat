import ButtonTxt from './ButtonTxt';
import Header from './Header.jsx';
import HomeStyle from './Home.module.css';
import Input from './Input.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <Header />
        <div className={HomeStyle.homeContainer}>
            <div className={HomeStyle.homeBrand}>
            ROCKETNOTES
            </div>
            
            <div className={HomeStyle.homeMenu}>
                <li>
                  <ButtonTxt title={"Todos"}/>
                </li>
                <li>
                  <ButtonTxt title={"React"}/>
                </li>
                <li>
                  <ButtonTxt title={"Node"}/>
                </li>
            </div>

            <div className={HomeStyle.homeSearch}>
            <Input placeholder='Pesquisar Nota'/>
            </div>
            
            <div>
              <Link to='/new'>
                <button 
                className={HomeStyle.newNote}
                type='button'>
                  Criar Nota
                </button>
              </Link>
            </div>

        </div>
    </>
  )
}

export default Home