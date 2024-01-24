import CardMStyle from './CardMovie.module.css';
import TagSection from './TagSection';
import StarCheck from '../components/images/starCheck.svg';
import Star from '../components/images/star.svg';

const CardMovie = () => {
  return (
    <>
        <div className={CardMStyle.cardContent}>
            <h2 className={CardMStyle.cardTitle}>Interstellar</h2>
                <div>
                    <img src={StarCheck}/>
                    <img src={StarCheck}/>
                    <img src={StarCheck}/>
                    <img src={StarCheck}/>
                    <img src={Star}/>
                </div>
                <p className={CardMStyle.txtCard}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero commodi nisi officia ea odio velit debitis! Asperiores inventore ut architecto. Sunt mollitia asperiores ad voluptatem totam distinctio odit a reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis autem iste incidunt et! Porro ipsa aliquam quod? Aliquam, officiis consequuntur asperiores quae beatae quisquam eaque corporis repellat est. Laboriosam?
                </p>
            <div className={CardMStyle.tagContent}>
                <TagSection title={'Ficção Científica'} />
                <TagSection title={'Drama'}/>
                <TagSection title={'Família'}/>
            </div>
        </div>
    </>
  )
}

export default CardMovie