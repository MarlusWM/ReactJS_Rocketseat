import TxtStyle from './TextArea.module.css';

const TextArea = ({ value, ...rest}) => {
  return (
    <>
    <div>
        <textarea className={TxtStyle.txtAreaContainer} 
        type="text"
        {...rest}>
          {value}
        </textarea>
    </div>
    </>
  )
}

export default TextArea