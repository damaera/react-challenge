import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { TodoListItem } from './item'

test('render items', async () => {
  // ARRANGE

  render(
    <>
      <TodoListItem id={1} name={'Working on test'} onClickDelete={() => {}} />,
      <TodoListItem id={2} name={'Passing test'} onClickDelete={() => {}} />,
    </>,
  )

  // ACT

  // ASSERT
  expect(screen.getByTestId(`todo-item-${1}`)).toHaveTextContent(
    'Working on test',
  )
  expect(screen.getByTestId(`todo-item-${2}`)).toHaveTextContent('Passing test')
})
