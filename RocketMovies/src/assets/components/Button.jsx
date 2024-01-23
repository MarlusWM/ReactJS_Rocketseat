import ButtonStyle from './Button.module.css';
import { Plus } from 'phosphor-react';

const Button = ({ title }) => {
  return (
    <>
        <div>
            <button 
                className={ButtonStyle.btnContent} 
                type="submit"> 
                <Plus size={32} /> {title}
            </button>
        </div>
    </>
  )
}

export default Button