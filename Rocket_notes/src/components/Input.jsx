import InputStyle from './Input.module.css'

const Input = ({ ...rest }) => {
  return (
    <>
    <div className={InputStyle.inputContent}>
        <input 
        className={InputStyle.inputBox}
        {...rest} />
    </div>
    </>
  )
}

export default Input