import ButtonStyle from './Button.module.css';


const Button = ({ title }) => {
  return (
    <>
        <div>
            <button 
                className={ButtonStyle.btnContent} 
                type="submit"> 
                {title}
            </button>
        </div>
    </>
  )
}

export default Button