import UseLinkStyle from "./UseLink.module.css";

const UseLink = ({ title, children, ...rest }) => {

  return (
    <div 
    className={UseLinkStyle.ourLink}
    {...rest}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default UseLink