import ButtonStyle from './Button.module.css';


const Button = ({ title, icon }) => {
  return (
    <>
        <div className={ButtonStyle.btnContent}>
            <button 
                className={ButtonStyle.btnBox} 
                type="submit"> 
                {icon} {title}
            </button>
        </div>
    </>
  )
}

export default Button