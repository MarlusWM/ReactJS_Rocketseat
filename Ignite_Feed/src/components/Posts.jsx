import PostStyle from './Posts.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import {format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const Posts = ({author, publishedAt}) => { /*props vieram da criação do objeto posts no app.jsx usando a desestruturação, pegando apenas as props desejadas*/

const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});

  return (
    <article className= {PostStyle.post}>
        <header>

            <div className= {PostStyle.author}>
                <Avatar border src={author.avatarUrl} />
            
                <div className={PostStyle.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

        <time title= {publishedDateFormated}></time> 
        {/*dateTime para SEO fazer a leitura da data o title serve para passar o mouse no dateTime e aparecer detalhado*/}
        </header>

        <div className={PostStyle.content}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In saepe illo ipsa quasi tempore repellat, minus dolores eos nobis dolorem. Dolores beatae molestias cupiditate, perferendis dignissimos nobis explicabo odio nemo.</p>
        </div>

        <form className= {PostStyle.commentForm}>
            <strong>Deixe seu comentário</strong>
            <textarea placeholder='Deixe um comentário'></textarea>
            <footer><button type='submit'>Comentar</button></footer>
        </form>

        <div className={PostStyle.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        
    </article>
  )
}

export default Posts