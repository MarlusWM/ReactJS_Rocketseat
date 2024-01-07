import AvatarStyle from './Avatar.module.css'

/*EXTENÇÕES DENTRO DO TYPESCRIPT*/
import { ImgHTMLAttributes } from "react"; //para considerar todos os atributos possíveis que uma tag HTML pode receber, depois, extends na interface


/*INICIANDO ESTUDOS TYPESCRIPT*/
/*interface para tipar as props*/
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{ //add extends
  border?: boolean, //? significa que é opcional fornecer a props
  /*src: string,
  alt?: string, essas tag, não preciso mais declarar quando uso o atributos globais da img*/
}


const Avatar = ({border = true, ...props}: AvatarProps) => { //para incluir todos os atributos que a tag img pode receber, fazemos com rest props (...)

  const isBorder = border != false;

  return (
    <img className= {isBorder ? AvatarStyle.avatarWithBorder : AvatarStyle.avatar} {...props}/> //spread operator, para pegar cada valor dentro do obj props e passar como uma propriedade para tag img
  )
}

export default Avatar