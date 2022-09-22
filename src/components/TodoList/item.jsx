import PropTypes from 'prop-types'
import './item.css'

export const TodoListItem = ({ id, name, onClickDelete }) => {
  return (
    <div data-testid={`todo-item-${id}`} className="item">
      <div className="item__name">{name.trim()}</div>
      <button className="item__delete" onClick={() => onClickDelete(id)}>
        Delete
      </button>
    </div>
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
