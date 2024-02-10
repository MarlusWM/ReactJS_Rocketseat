import InputStyle from './Input.module.css';

const Input = ({ type, placeholder, icon, onChange, value }) => {
  return (
    <>
        <div className={InputStyle.inputContent}>
            <input 
            className={InputStyle.inputBox}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            >
            </input>
        </div>
    </>
  )
}

export default Input