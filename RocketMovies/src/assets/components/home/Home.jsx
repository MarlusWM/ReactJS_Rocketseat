import HomeStyle from './Home.module.css';
import Header from '../header/Header.jsx';
import Button from '../Button.jsx';
import CardMovie from '../CardMovie.jsx';

const Home = () => {
  return (
    <>
        <header>
            <Header />
        </header>

        <div className={HomeStyle.homeContent}>
            <div className={HomeStyle.addMovie}>
                <h1 className={HomeStyle.homeTitle}>Meus Filmes</h1>
                <Button title={'Adicionar filme'}/>
            </div>
            <CardMovie />
        </div>
    </>
  )
}

export default Home