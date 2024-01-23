import TagStyle from './TagSection.module.css';

const TagSection = ( { title }) => {
  return (
    <>
        <div>
            <button
            className={TagStyle.btnTagSection}
            type="button">{title}</button>         
        </div>
    </>
  )
}

export default TagSection