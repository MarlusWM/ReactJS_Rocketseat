import CreateStyle from './CreateMovie.module.css';
import Header from '../header/Header.jsx';
import ButtonBack from '../ButtonBack.jsx';
import Input from '../Input.jsx';
import { X } from 'phosphor-react'
import Button from '../Button.jsx';


const CreateMovie = () => {
  return (
    <>
        <header>
            <Header/>
        </header>

        <div className={CreateStyle.createContent}>
            <ButtonBack />
            <div className={CreateStyle.createBox}>
                <h1>Novo Filme</h1>
                <div className={CreateStyle.formMovie}>
                    <Input placeholder={'Título'}/>
                    <Input placeholder={'Sua note (0 a 5)'}/>
                </div>
                <textarea 
                name="txtMovie" cols="30" rows="10" 
                placeholder='Observações'>
                </textarea>
            </div>

            <div className={CreateStyle.createBrand}>
                <p>Marcadores</p>
                <div className={CreateStyle.brandBox}>
                    <button type="button">
                        React <X size={20} />
                    </button>

                    <button type="button">
                        React <X size={20} />
                    </button>
                </div>                
            </div>

            <div className={CreateStyle.btnEnd}>
                <button type='button'>Excluir filme</button>
                <Button title={'Salvar alterações'}/>
            </div>
        </div>
    </>
  )
}

export default CreateMovie