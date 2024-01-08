import InputListStyle from "./InputList.module.css"
import PlusIcon from "../assets/plusIcon.svg"

const InputList = () => {
  return (
    <>
        <div className={InputListStyle.inputBox}>
            <input className={InputListStyle.inputText} 
            type="text" 
            name="listText" 
            id="" 
            placeholder="Adicione uma tarefa"
            />
            <button className={InputListStyle.btnAdd}
            type="submit">Criar
            <img src={PlusIcon} alt="Add List" />
            </button>
        </div>
    </>
  )
}

export default InputList