import PreviewStyle from './MoviePreview.module.css';
import Header from '../header/Header.jsx';
import { ArrowLeft, X } from 'phosphor-react';
import Star from '../images/star/star.svg';
import TagSection from '../TagSection.jsx';
import { Link } from 'react-router-dom';

const MoviePreview = () => {
  return (
    <>       
        <header>
            <Header />
        </header>

        <div className={PreviewStyle.previewContent}>
            <Link to='/home'>
            <a href="#" className={PreviewStyle.back}>
                <ArrowLeft size={20}/> Voltar
            </a>
            </Link>

            <div className={PreviewStyle.title}>
                <h1>Interestellar</h1>
                <img src={Star} alt="" />
                <img src={Star} alt="" /> 
                <img src={Star} alt="" /> 
                <img src={Star} alt="" /> 
                <img src={Star} alt="" /> 
            </div>

            <div className={PreviewStyle.avatar}>
                <img src="https://avatars.githubusercontent.com/u/104041138?v=4" alt="" />
                <p>Por Marlus Weber</p>
                <Date/>
            </div>

            <div className={PreviewStyle.tagSection}>
                <TagSection title={'Ficção Científica'} icon={<X/>}/>
            </div>

            <div className={PreviewStyle.text}>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, saepe. Ratione nemo, enim accusantium consectetur sequi dolorum, eum odio cumque illum asperiores minima, omnis libero non et expedita dicta minus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ratione impedit doloremque aliquid similique optio id ullam non. Doloribus reprehenderit ipsa est id modi, vero laborum officiis tempora porro ipsum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae velit dolorem fugit rem explicabo obcaecati nisi non odio accusantium? Ab unde quas doloribus sit nostrum sed tempore quam cumque doloremque?</h1>
            </div>
        </div>
    </>
  )
}

export default MoviePreview