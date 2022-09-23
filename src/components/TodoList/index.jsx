import { useTaskAdd, useTaskDelete, useTaskList } from '../../hooks/use-task'
import { TodoListInputForm } from './input-form'
import { TodoListItem } from './item'

import './index.css'
import { useEffect } from 'react'

/**
 * TODO List
 */
export default function TodoList() {
  const taskList = useTaskList()
  const taskDelete = useTaskDelete()
  const taskAdd = useTaskAdd()

  useEffect(() => {
    if (taskAdd.data) {
      taskList.mutate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskAdd.data])

  useEffect(() => {
    if (!taskDelete.isLoading) {
      taskList.mutate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskDelete.isLoading])

  return (
    <div className="todolist">
      <h1 className="todolist__title">Todo List</h1>

      <TodoListInputForm
        onSubmit={(text) => taskAdd.mutate(text)}
        isLoading={taskAdd.isLoading}
      />

      <div className="todolist__items">
        {taskList.data?.map((task) => (
          <TodoListItem
            key={task.id}
            id={task.id}
            name={task.title}
            onClickDelete={(id) => taskDelete.mutate(id)}
          />
        ))}
      </div>
    </div>
  )
}
