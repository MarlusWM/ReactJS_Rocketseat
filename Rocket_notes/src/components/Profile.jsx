import ProfileStyle from './Profile.module.css';
import { ArrowUUpLeft } from 'phosphor-react';
import Input from './Input.jsx';
import Button from './Button.jsx';

const Profile = () => {
  return (
    <>
        <div className={ProfileStyle.profileContainer}>
            <header>
                <a href="#"><ArrowUUpLeft size={32} /></a>
            </header>

            <form>
                <Input
                placeholder="nome"
                type="text"
                />

                <Input
                placeholder="Email"
                type="text"
                />

                <Input
                placeholder="Senha Atual"
                type="password"
                />

                <Input
                placeholder="Nova Senha"
                type="password"
                />

                <Button 
                title={'Salvar'}
                />
            </form>
        </div>
    </>
  )
}

export default Profile