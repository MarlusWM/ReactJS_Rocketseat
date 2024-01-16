import ButtonTxtStyle from './ButtonTxt.module.css';

const ButtonTxt = ({ title }) => {
  return (
    <div>
      <button 
      className={ButtonTxtStyle.btnTxt}
      type="button"
      >
        {title}
      </button>
    </div>
  )
}

export default ButtonTxt