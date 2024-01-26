import HomeStyle from './Home.module.css';
import Header from '../header/Header.jsx';
import Button from '../Button.jsx';
import CardMovie from '../CardMovie.jsx';
import { Plus } from 'phosphor-react';


const Home = () => {
  return (
    <>
        <header>
            <Header />
        </header>

        <div className={HomeStyle.homeContent}>
            <div className={HomeStyle.addMovie}>
                <h1 className={HomeStyle.homeTitle}>Meus Filmes</h1>
                  <div className={HomeStyle.homeBtn}>
                    <Plus size={32}/>
                    <Button title={'Adicionar filme'}/>
                  </div>
            </div>           
        </div>

        <div className={HomeStyle.homeCard}>
          <CardMovie />
        </div>
        <div className={HomeStyle.homeCard}>
          <CardMovie />
        </div>
        <div className={HomeStyle.homeCard}>
          <CardMovie />
        </div>
        <div className={HomeStyle.homeCard}>
          <CardMovie />
        </div>
    </>
  )
}

export default Home