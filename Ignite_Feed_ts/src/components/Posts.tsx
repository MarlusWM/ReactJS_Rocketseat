import PostStyle from './Posts.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


/*INICIANDO ESTUDOS COM TYPESCRIPT*/
/*criando objetos com interface para relacionar o que as props da função do componente possuem e quais tipos*/
interface Author {
    name: string,
    role: string,
    avatarUrl: string,
}

interface Content {
    type: 'paragraph' | 'link', //ela é parágrafo OU link
    content: string,
}

export interface PostType {
    id: 1,
    author: Author,
    publishedAt: Date,
    content: Content[],
}
interface PostProps {
    post: PostType,
}

const Posts = ({ post }: PostProps) => { /*props vieram da criação do objeto posts no app.jsx usando a desestruturação, pegando apenas as props desejadas*/

/* INCLUSAO DE DATA*/
const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});
const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true});

/*INSERINDO COMENTÁRIOS ATRAVÉS DO BOTÃO SUBMIT*/
const [comments, setComment] = useState(['Legal!']);

/*CAPTURANDO E INCLUINDO O TEXTO DIGITADO DO COMENTÁRIO*/
const [newCommentText, setNewCommentText] = useState('');

function handleCreateNewComment(e: FormEvent) { //colocado :FormEvent para ts reconhecer a tipagem
    e.preventDefault();    
    setComment([...comments, newCommentText]);
    setNewCommentText('');
}

/*CAPTURANDO E INCLUINDO O TEXTO DIGITADO DO COMENTÁRIO*/
function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) { //foi falado pro ts que o evento foi disparado no formulário mas no campo text area por um change
    setNewCommentText(e.target.value);
    e.target.setCustomValidity('');
}

/*FUNÇÃO COMO PROPS PARA COMUNICAÇÃO ENTRE COMPONENTES (FUNCAO DELETAR)*/
function deleteComment(commentToDelete: string) {
    /*imutabilidade, devo criar uma nova variável para deletar e ela irá gerar uma nova lista*/
    const commentWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
    });
    setComment(commentWithoutDeleteOne);
}

/*FUNÇÃO PARA CLIENTE PREENCHER O CAMPO DE TEXTO PARA COMENTAR*/
function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) { //tipado o tipo de argumento com generics de onde foi disparado
    e.target.setCustomValidity('Esse campo é obrigatório!');
}

/*VARIÁVEL PARA CONDICIONAR O BOTÃO SUBMIT SEM TEXTO*/
const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className= {PostStyle.post}>
        <header>

            <div className= {PostStyle.author}>
                <Avatar border src={post.author.avatarUrl} />
            
                <div className={PostStyle.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>
            </div>

        <time title= {publishedDateFormated}>{publishedDateRelativeToNow}</time> 
        {/*dateTime para SEO fazer a leitura da data o title serve para passar o mouse no dateTime e aparecer detalhado*/}
        </header>

        <div className={PostStyle.content}>
            {post.content.map(line => {
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