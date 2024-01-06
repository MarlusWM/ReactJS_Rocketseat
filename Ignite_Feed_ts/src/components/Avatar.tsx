import AvatarStyle from './Avatar.module.css'


/*INICIANDO ESTUDOS TYPESCRIPT*/
/*interface para tipar as props*/
interface AvatarProps {
  border?: boolean, //? significa que é opcional fornecer a props
  src: string,
  alt?: string,
}


const Avatar = ({border = true, src, alt}: AvatarProps) => {

  const isBorder = border != false ;

  return (
    <img className= {isBorder ? AvatarStyle.avatarWithBorder : AvatarStyle.avatar} src={src} alt={alt}/>
  )
}

export default Avatar