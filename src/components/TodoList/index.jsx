import './index.css'
import { TodoListItem } from './item'

/**
 * TODO List
 */
export default function TodoList() {
  return (
    <div className="todolist">
      <h1 className="title">Todo List</h1>

      <TodoListItem id={1} name={'Test'} onClickDelete={() => {}} />
    </div>
  )
}
