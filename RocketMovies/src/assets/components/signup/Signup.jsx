import SignupStyle from './Signup.module.css';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import Background from '../backgroundLogin/background.jpg';
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom'


import { useState } from 'react';
//copiado da documentação do site npm react hooks, authentication, userCreateUserWithEmailandPassword
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig.jsx';

const Signup = () => {

  /*retido config no firebase hooks */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth); /*auth veio da firebaseconfig */


  //complementar
function handleSignup(evento) {
    evento.preventDefault();
    console.log(evento);

    if (email === '') {
      return alert('DEVE CONTER UM EMAIL')
    } else {
      createUserWithEmailAndPassword(email, password);
      alert('PARABÉNS! Conta criada com sucesso.');
    }

    if (password === '') {
      return alert('DEVE CONTER UMA SENHA DE 6 DÍGITOS NUMÉRICOS')
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  }

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
                  <Input 
                  type={'text'} 
                  placeholder={'Nome'} />

                  <Input 
                  type={'text'} 
                  placeholder={'Email'} 
                  onChange={(evento)=> setEmail(evento.target.value)} />
                  {/*passado a props onchange com acesso ao objeto evento e setando nos respectivos, seus valores no target, próx passo é testar */}

                  <Input 
                  type={'password'} 
                  placeholder={'Senha com 6 números'}
                  onChange={(evento)=> setPassword(evento.target.value)} />

                  <div className={SignupStyle.btnEnter}>
                    <Button onClick={handleSignup} title={'Cadastrar'} /> 
                    {/*adicionado onclick props para chamar funcao handle, próx passo, adicionar onchange nos inputs*/}
                  </div>              
              </div>              
                <div className={SignupStyle.returnLogin}>
                  <Link to='/'>
                  <a className={SignupStyle.link} href="#"><ArrowLeft size={20} /> Voltar para o login</a>
                  </Link>
                </div>
            </form>
            <img className={SignupStyle.bg} src={Background} alt="" />
        </div>        
    </>
  )
}

export default Signup