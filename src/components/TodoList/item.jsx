import PropTypes from 'prop-types'

export const TodoListItem = ({ id, name, onClickDelete }) => {
  return (
    <div data-testid={`todo-item-${id}`}>
      <div className="name">{name.trim()}</div>
      <button onClick={() => onClickDelete(id)}>delete</button>
    </div>
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
