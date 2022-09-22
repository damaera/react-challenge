import './index.css'
import { TodoListInputForm } from './input-form'
import { TodoListItem } from './item'

/**
 * TODO List
 */
export default function TodoList() {
  return (
    <div className="todolist">
      <h1 className="todolist__title">Todo List</h1>

      <TodoListInputForm
        onSubmit={(text) => console.log(text)}
        isLoading={false}
      />

      <div className="todolist__items">
        <TodoListItem id={1} name={'Test'} onClickDelete={() => {}} />
      </div>
    </div>
  )
}
