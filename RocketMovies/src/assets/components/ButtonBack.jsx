import BackStyle from './ButtonBack.module.css';
import { ArrowLeft } from 'phosphor-react';

const ButtonBack = () => {
  return (
    <>
    <div>
        <div className={BackStyle.btnBack}
        type="button">
            <a href="/"><ArrowLeft size={20} />Voltar</a>
        </div>
    </div>
    </>
  )
}

export default ButtonBack