import ButtonStyle from './Button.module.css';


const Button = ({ title, icon, onClick }) => {
  return (
    <>
        <div className={ButtonStyle.btnContent}>
            <button 
                className={ButtonStyle.btnBox} 
                type="submit"
                onClick={onClick}> 
                {icon} {title}
            </button>
        </div>
    </>
  )
}

export default Button