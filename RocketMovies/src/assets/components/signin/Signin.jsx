import SigninStyle from './Signin.module.css';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import Background from '../backgroundLogin/background.jpg';

const Signin = () => {
  return (
    <>
        <div className={SigninStyle.sigContent}>
            <form>
              <div className={SigninStyle.title}>
                  <h1>RocketMovies</h1>
                  <span>Aplicação para acompanhar tudo que assistir.</span>
              </div>
              <div className={SigninStyle.formLog}>
                  <h2>Faça seu login</h2>
                  <Input type={'text'} placeholder={'Email'}/>
                  <Input type={'password'} placeholder={'Senha'}/>
                  <div className={SigninStyle.btnEnter}>
                    <Button title={'Entrar'}/>
                  </div>              
              </div>              
                <div className={SigninStyle.newAccount}>
                  <a href="#">Criar conta</a>
                </div>
            </form>
            <img src={Background} alt="" />
        </div>        
    </>
  )
}

export default Signin