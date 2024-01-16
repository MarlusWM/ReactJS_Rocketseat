import ButtonTxt from './ButtonTxt';
import HomeStyle from './Home.module.css';
import Input from './Input.jsx';


const Home = () => {
  return (
    <>
        <div className={HomeStyle.homeContainer}>
          <h1></h1>
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
            <button 
            className={HomeStyle.newNote}
            type='button'>
              Criar Nota
            </button>
            </div>

        </div>
    </>
  )
}

export default Home