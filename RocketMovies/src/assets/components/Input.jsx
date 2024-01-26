import InputStyle from './Input.module.css';

const Input = ({ type, placeholder }) => {
  return (
    <>
        <div className={InputStyle.inputContent}>
            <input className={InputStyle.inputBox}
            type={type} placeholder={placeholder}>
            </input>
        </div>
    </>
  )
}

export default Input