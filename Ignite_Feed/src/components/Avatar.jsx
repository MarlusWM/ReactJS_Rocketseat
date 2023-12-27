import AvatarStyle from './Avatar.module.css'

const Avatar = ({border = true,src}) => {

  const isBorder = border != false ;

  return (
    <img className= {isBorder ? AvatarStyle.avatarWithBorder : AvatarStyle.avatar} src={src} />
  )
}

export default Avatar