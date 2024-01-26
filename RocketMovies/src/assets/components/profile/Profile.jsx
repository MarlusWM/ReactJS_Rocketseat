import ProfileStyle from './Profile.module.css';
import {Camera} from 'phosphor-react';
import Input from '../Input.jsx';
import Button from '../Button.jsx'
import ButtonBack from '../ButtonBack.jsx';

const Profile = () => {
  return (
    <>
        <div className={ProfileStyle.profileContent}>
            <header>
                <div>
                    <ButtonBack />
                </div>
            </header>

                <form>
                    <div className={ProfileStyle.avatarContainer}>
                        <img className={ProfileStyle.avatar} 
                        src="https://avatars.githubusercontent.com/u/104041138?v=4" />
                        <label htmlFor="avatar">
                            <Camera size={32} />
                            <input type="file" id='avatar' />
                        </label>
                    </div>
                    <Input placeholder={'Nome'} type={'text'}/>
                    <Input placeholder={'Email'} type={'email'}/>
                    <br/>
                    <Input placeholder={'Senha atual'} type={'password'}/>
                    <Input placeholder={'Senha nova'} type={'password'}/>
                    <div className={ProfileStyle.profileBtn}>
                        <Button title={'Salvar'}/>
                    </div>
                </form>
                
            </div>


    </>
  )
}

export default Profile