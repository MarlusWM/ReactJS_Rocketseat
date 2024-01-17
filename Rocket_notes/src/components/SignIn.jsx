import SignStyle from './SignIn.module.css'
import Input from './Input.jsx'
import Button from './Button.jsx'

const SignIn = () => {
  return (
    <>
    <div className={SignStyle.signContainer}>
        <form>
            <h1>Rocket Notes</h1>
            <p>Aplicação de notas</p>
            <h2>Faça seu login</h2>

                <Input
                placeholder="Email"
                type='text'
                />

                <Input
                placeholder="Senha"
                type='password'
                />

                <Button
                title='Entrar'
                />

                <a href="#">Criar conta</a>
        </form>
    </div>
    </>
  )
}

export default SignIn