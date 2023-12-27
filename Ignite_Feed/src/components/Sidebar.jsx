import Avatar from './Avatar'
import SidebarStyle from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

const Sidebar = () => {
  return (
    <aside className= {SidebarStyle.sidebar}>
      <img className= {SidebarStyle.cover} src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" />

      <div className= {SidebarStyle.profile}>
        <Avatar border src='https://avatars.githubusercontent.com/u/90402449?s=48&v=4' />
        <strong>Marlus Weber</strong>
        <span>Cargo</span>
      </div>

      <footer>
        
        <a href="#">
        <PencilLine size= {20}/> Editar seu perfil</a>
      </footer>
    </aside>
  )
}

export default Sidebar