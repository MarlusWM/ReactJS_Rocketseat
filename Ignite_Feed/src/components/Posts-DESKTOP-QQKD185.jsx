import PostStyle from './Posts.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


const Posts = ({author, publishedAt, content}) => { /*props vieram da criação do objeto posts no app.jsx usando a desestruturação, pegando apenas as props desejadas*/

/* INCLUSAO DE DATA*/
const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

/*INSERINDO COMENTÁRIOS ATRAVÉS DO BOTÃO SUBMIT*/
const [comments, setComment] = useState(['legal']);

function handleCreateNewComment() {
    event.preventDefault();
    setComment([...comments, newCommentText]);
}

/*CAPTURANDO E INCLUINDO O TEXTO DIGITADO DO COMENTÁRIO*/
const [newCommentText, setNewCommentText] = ('');

function handleNewCommentText() {
    console.log(event.target.value);
}


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

        <time title= {publishedDateFormated}>{publishedDateRelativeToNow}</time> 
        {/*dateTime para SEO fazer a leitura da data o title serve para passar o mouse no dateTime e aparecer detalhado*/}
        </header>

        <div className={PostStyle.content}>
            {content.map(line => {
                if (line.type == 'paragraph') {
                    return <p>{line.content}</p>;
                }else if (line.type == 'link') {
                    return <p><a href="#">{line.content}</a></p>;
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className= {PostStyle.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea onChange={handleNewCommentText} placeholder='Deixe um comentário'></textarea>

            <footer>
                <button type='submit'>Comentar</button>
            </footer>
        </form>

        <div className={PostStyle.commentList}>
            {comments.map(comment => {
                return <Comment content={comment}/>
            })}
        </div>
        
    </article>
  )
}

export default Posts