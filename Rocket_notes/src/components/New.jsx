import NewStyle from './New.module.css';
import Header from './Header.jsx';
import Input from './Input.jsx';
import TextArea from './TextArea.jsx';
import NoteItem from './NoteItem.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom'

const New = () => {
  return (
    <>
        <div className={NewStyle.newContainer}>
            <Header />

            <main>
                <form>
                    <header>
                        <h1>Criar Nota</h1>
                    </header>

                    <Input
                    placeholder= "Título da Nota"/>

                    <TextArea 
                    placeholder= "Observações"/>

                    <section>Links Úteis</section>
                    <NoteItem value={'www.site.com'}/>
                    <NoteItem isNew placeholder='Novo Link'/>

                    <Link to='/'>
                        <Button title={'Salvar'}/>
                    </Link>
                    <a href="/">Voltar</a>
                </form>                
            </main>
        </div>
    </>
  )
}

export default New