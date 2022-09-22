import PropTypes from 'prop-types'
import { useState } from 'react'
import './input-form.css'

export const TodoListInputForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('')

  return (
    <form
      data-testid={`todo-form`}
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(text)
      }}
    >
      <input
        data-testid={'todo-input'}
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="form__input"
        placeholder="Task name"
        disabled={isLoading}
      />
      <button
        data-testid="todo-input-submit"
        className="form__submit"
        disabled={isLoading || !text}
      >
        Add
      </button>
    </form>
  )
}

TodoListInputForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
