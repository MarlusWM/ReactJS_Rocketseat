import InputListStyle from "./InputList.module.css"
import PlusIcon from "../assets/plusIcon.svg"
import { useState } from "react"

const InputList = () => {

  
  const [inputText, setInputText] = useState('');

  return (
    <>
        <div className={InputListStyle.inputBox}>
            <input className={InputListStyle.inputText}
            value={inputText}
            onChange={(e) => 
              setInputText(e.target.value)}
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