import TasksStyle from "./Tasks.module.css"
import checkRadio from "../assets/checkRadio.svg"
import trash from "../assets/trash.svg"

const Tasks = () => {


  return (
    <div className={TasksStyle.tasks}>
      <div className={TasksStyle.infoTasks}>
        <span className={TasksStyle.infoCreateTasks}>Tarefas criadas</span>  
        <span className={TasksStyle.tasksFinished}>Conluídas</span>
      </div>
      <div className={TasksStyle.tasksAdd}>
        <img src={checkRadio} alt="" />
        <p className={TasksStyle.textTasks}>TASKS</p>
        <img className={TasksStyle.trashBtn} src={trash} alt="" />
      </div>

      <div className={TasksStyle.tasksAdd}>
        <img src={checkRadio} alt="" />
        <p className={TasksStyle.textTasks}>TASKS</p>
        <img className={TasksStyle.trashBtn} src={trash} alt="" />
      </div>
    </div>
  )
}

export default Tasks