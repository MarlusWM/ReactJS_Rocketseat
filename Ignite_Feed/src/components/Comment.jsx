import Avatar from './Avatar'
import CommentStyle from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

const Comment = () => {
  return (
    <div className= {CommentStyle.comment}>
      <Avatar border={false} src="https://avatars.githubusercontent.com/u/104041138?v=4" alt="" />
      <div className= {CommentStyle.commentBox}>
        <div className={CommentStyle.commentContent}>
          <header>
            <div className={CommentStyle.authorAndTime}>
              <strong>Marlus Weber</strong>
              <time dateTime='2023-12-22 09:22' title='22 de Dezembro de 2023'>Aprox. 2h</time>
            </div>
            <button title='Excluir'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Conteúdo comentário</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/> Aplaudir 
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment