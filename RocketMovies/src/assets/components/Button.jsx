import ButtonStyle from './Button.module.css';


const Button = ({ title }) => {
  return (
    <>
        <div className={ButtonStyle.btnContent}>
            <button 
                className={ButtonStyle.btnBox} 
                type="submit"> 
                {title}
            </button>
        </div>
    </>
  )
}

export default Button