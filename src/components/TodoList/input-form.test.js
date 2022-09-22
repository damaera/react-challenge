import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoListInputForm } from './input-form'

test('calls onSubmit prop when submitted', () => {
  // ARRANGE
  const handleSubmit = jest.fn()

  render(<TodoListInputForm onSubmit={handleSubmit} isLoading={false} />)

  const inputEl = screen.getByTestId('todo-input')
  const submitEl = screen.getByTestId('todo-input-submit')

  // ACT
  userEvent.type(inputEl, 'test')
  userEvent.click(submitEl)

  // ASSERT
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(inputEl).toHaveValue('test')
  expect(submitEl).not.toHaveAttribute('disabled')
})

test('not calls onSubmit prop when text is empty', () => {
  // ARRANGE
  const handleSubmit = jest.fn()

  render(<TodoListInputForm onSubmit={handleSubmit} isLoading={false} />)

  const inputEl = screen.getByTestId('todo-input')
  const submitEl = screen.getByTestId('todo-input-submit')

  // ACT
  userEvent.type(inputEl, '')
  userEvent.click(submitEl)

  // ASSERT
  expect(handleSubmit).toHaveBeenCalledTimes(0)
  expect(inputEl).toHaveValue('')
  expect(submitEl).toHaveAttribute('disabled')
})
