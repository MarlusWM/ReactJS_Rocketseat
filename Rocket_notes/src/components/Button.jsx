import ButtonStyle from './Button.module.css';

const Button = ({ title }) => {

    return (
    <div>
        <button 
        className={ButtonStyle.btn}
        type="button">
            {title}
        </button>
    </div>
  )
}

export default Button