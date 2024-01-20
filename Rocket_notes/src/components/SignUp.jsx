import SignUpStyle from './SignUp.module.css'
import Input from './Input.jsx'
import Button from './Button.jsx'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div className={SignUpStyle.signContainer}>
        <form>
            <h1>Rocket Notes</h1>
            <p>Aplicação de notas</p>
            <h2>Crie sua conta</h2>
                <Input
                placeholder="Nome"
                type='text'
                />

                <Input
                placeholder="Email"
                type='text'
                />

                <Input
                placeholder="Senha"
                type='password'
                />

              <Link to='/signin'>
                <Button
                title='Cadastrar'
                />
              </Link>

              <Link to='/signin'>
                <a href="#">Voltar</a>
              </Link>
        </form>
    </div>
    </>
  )
}

export default SignUp