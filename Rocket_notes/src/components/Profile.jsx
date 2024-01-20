import ProfileStyle from './Profile.module.css';
import { ArrowUUpLeft, Camera } from 'phosphor-react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
        <div className={ProfileStyle.profileContainer}>
            <header>
              <Link to={'/'}>
                <a href="#"><ArrowUUpLeft size={32} /></a>
                </Link>
            </header>

            <form>
              <div className={ProfileStyle.avatarContainer}>
                <img src="https://avatars.githubusercontent.com/u/104041138?v=4" alt="" />

                <label htmlFor="avatar">
                  <Camera size={42} />
                  <input 
                  type="file"
                  id='avatar' />
                </label>
              </div>

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