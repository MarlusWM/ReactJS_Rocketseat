import HeaderStyle  from "./Header.module.css"
import ToDoListIcon from "../assets/ToDoList_logo.svg"


const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <img src={ToDoListIcon} alt="Icon To Do List" />
      <span>to</span>
      <span className={HeaderStyle.do}>do</span>
      <span>List</span>
      
    </div>
  )
}

export default Header