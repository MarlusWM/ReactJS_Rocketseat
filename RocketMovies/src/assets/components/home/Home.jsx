import HomeStyle from './Home.module.css';
import Header from '../header/Header.jsx';
import Button from '../Button.jsx';
import CardMovie from '../CardMovie.jsx';
import { Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className={HomeStyle.homeContent}>

        <Header />

        <div className={HomeStyle.addMovie}>
            <h1 className={HomeStyle.homeTitle}>Meus Filmes</h1>
              <div className={HomeStyle.homeBtn}>
                <Link to='/createMovie'>
                  <Button 
                  title={'Adicionar filme'}
                  icon={<Plus size={32}/>}
                  />
                </Link>
              </div>
        </div>           
    </div>

      <div className={HomeStyle.homeCard}>
        <Link to='/moviePreview'>
          <CardMovie />
        </Link>
      </div>

      <div className={HomeStyle.homeCard}>
        <Link to='/moviePreview'>
          <CardMovie />
        </Link>
      </div>

      <div className={HomeStyle.homeCard}>
        <Link to='/moviePreview'>
          <CardMovie />
        </Link>
      </div>

      <div className={HomeStyle.homeCard}>
        <Link to='/moviePreview'>
          <CardMovie />
        </Link>
      </div>
    </>
  )
}

export default Home