import SigninStyle from './Signin.module.css';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import Background from '../backgroundLogin/background.jpg';
import { Link } from 'react-router-dom';


import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig.jsx';



const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

function handleSignin(event) {
  event.preventDefault();
  signInWithEmailAndPassword(email, password);
  console.log('disparado');
}

if (user) {
  return console.log(user);
}

if(loading) {
  return <h1>carregando...</h1>
}

if (error) {
  alert('ERRO AO LOGAR')
  return <h1>ERROR</h1>
}



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
                  <Input 
                  type={'email'}
                  placeholder={'Email'}
                  value={email}
                  onChange={(event)=> {setEmail(event.target.value)}}
                  />

                  <Input 
                  type={'password'}
                  placeholder={'Senha'}
                  value={password}
                  onChange={(event)=> {setPassword(event.target.value)}}
                  />

                  <div className={SigninStyle.btnEnter}>
                    <Link to='/home'>
                      <Button 
                      type={'submit'}
                      onClick={handleSignin}
                      title={'Entrar'}/>
                    </Link>
                  </div>              
              </div>

                <div className={SigninStyle.newAccount}>
                  <Link to='/signup'>
                    <a href="#">Criar conta</a>
                  </Link>
                </div>
            </form>

            <div className={SigninStyle.divBg}>
              <img className={SigninStyle.bg} src={Background} alt="" />
            </div>
        </div>        
    </>
  )
}

export default Signin