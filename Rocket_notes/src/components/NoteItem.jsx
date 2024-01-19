import NoteItemStyle from './NoteItem.module.css';
import { Plus, X } from 'phosphor-react'

const NoteItem = ({ isNew, value, onClick, ...rest}) => {

  return (
    <>
        <div 
        className={NoteItemStyle.noteItemContainer} 
        isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest}></input>

            <button
            className={isNew ? 'btnSum' : 'btnDelete'}
            type="button" 
            onClick={onClick}
            >
                {isNew ? <Plus size={20} /> : <X size={20} />}
            </button>
        </div>


    </>
  )
}

export default NoteItem