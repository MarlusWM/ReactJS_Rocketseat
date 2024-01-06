import PostStyle from './Posts.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


const Posts = ({ author, publishedAt, content }) => { /*props vieram da criação do objeto posts no app.jsx usando a desestruturação, pegando apenas as props desejadas*/

/* INCLUSAO DE DATA*/
const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});
const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

/*INSERINDO COMENTÁRIOS ATRAVÉS DO BOTÃO SUBMIT*/
const [comments, setComment] = useState(['Legal!']);

/*CAPTURANDO E INCLUINDO O TEXTO DIGITADO DO COMENTÁRIO*/
const [newCommentText, setNewCommentText] = useState('');

function handleCreateNewComment(e) {
    e.preventDefault();    
    setComment([...comments, newCommentText]);
    setNewCommentText('');
}

/*CAPTURANDO E INCLUINDO O TEXTO DIGITADO DO COMENTÁRIO*/
function handleNewCommentChange(e) {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity('');
}

/*FUNÇÃO COMO PROPS PARA COMUNICAÇÃO ENTRE COMPONENTES (FUNCAO DELETAR)*/
function deleteComment(commentToDelete) {
    /*imutabilidade, devo criar uma nova variável para deletar e ela irá gerar uma nova lista*/
    const commentWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
    });
    setComment(commentWithoutDeleteOne);
}

/*FUNÇÃO PARA CLIENTE PREENCHER O CAMPO DE TEXTO PARA COMENTAR*/
function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Esse campo é obrigatório!');
}

/*VARIÁVEL PARA CONDICIONAR O BOTÃO SUBMIT SEM TEXTO*/
const isNewCommentEmpty = newCommentText.length === 0;

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
                    return <p key={line.content}>{line.content}</p>;
                }else if (line.type == 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>;
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className= {PostStyle.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea 
            onChange={handleNewCommentChange} 
            value={newCommentText} 
            placeholder='Deixe um comentário'
            required
            onInvalid={handleNewCommentInvalid}
            ></textarea>

            <footer>
                <button type='submit' 
                disabled={isNewCommentEmpty}
                >Comentar</button>
            </footer>
        </form>

        <div className={PostStyle.commentList}>
            {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
            })}
        </div>
        
    </article>
  )
}

export default Posts