import SignupStyle from './Signup.module.css';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import Background from '../backgroundLogin/background.jpg';
import { ArrowLeft } from 'phosphor-react';

const Signup = () => {
  return (
    <>
        <div className={SignupStyle.sigContent}>
            <form>
              <div className={SignupStyle.title}>
                  <h1>RocketMovies</h1>
                  <span>Aplicação para acompanhar tudo que assistir.</span>
              </div>
              <div className={SignupStyle.formLog}>
                  <h2>Crie sua conta</h2>
                  <Input type={'text'} placeholder={'Nome'}/>
                  <Input type={'text'} placeholder={'Email'}/>
                  <Input type={'password'} placeholder={'Senha'}/>
                  <div className={SignupStyle.btnEnter}>
                    <Button title={'Cadastrar'}/>
                  </div>              
              </div>              
                <div className={SignupStyle.returnLogin}>
                  <a href="/"><ArrowLeft size={20} /> Voltar para o login</a>
                </div>
            </form>
            <img src={Background} alt="" />
        </div>        
    </>
  )
}

export default Signup