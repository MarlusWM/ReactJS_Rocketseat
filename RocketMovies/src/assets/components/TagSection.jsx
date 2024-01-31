import TagStyle from './TagSection.module.css';


const TagSection = ( { title, icon }) => {
  return (
    <>
        <div>
            <button
            className={TagStyle.btnTagSection}
            type="button"
            >{title} {icon}
            </button>         
        </div>
    </>
  )
}

export default TagSection