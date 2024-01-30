import TagStyle from './TagSection.module.css';
import { X } from 'phosphor-react'

const TagSection = ( { title }) => {
  return (
    <>
        <div>
            <button
            className={TagStyle.btnTagSection}
            type="button">{title} <X size={20} />
            </button>         
        </div>
    </>
  )
}

export default TagSection