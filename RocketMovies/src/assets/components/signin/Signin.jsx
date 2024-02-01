import SigninStyle from './Signin.module.css';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import Background from '../backgroundLogin/background.jpg';
import { Link } from 'react-router-dom';

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
                    <Link to='/home'>
                      <Button title={'Entrar'}/>
                    </Link>
                  </div>              
              </div>              
                <div className={SigninStyle.newAccount}>
                  <Link to='/signup'>
                    <a href="#">Criar conta</a>
                  </Link>
                </div>
            </form>
            <img className={SigninStyle.bg} src={Background} alt="" />
        </div>        
    </>
  )
}

export default Signin