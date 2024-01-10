import UseLinkStyle from "./UseLink.module.css";

const UseLink = ({ title, children }) => {

  return (
    <div className={UseLinkStyle.ourLink}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default UseLink