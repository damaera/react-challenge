import { renderHook, act } from '@testing-library/react-hooks'
import { useTaskList, useTaskAdd, useTaskDelete } from './use-task'

import db from '../../db.json'

// Api isn't mocked,
// just use real api in json-server

test('should use task list', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useTaskList())

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeTruthy()

  await waitForNextUpdate()

  expect(result.current.data.length).toBe(db.tasks.length)
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})

test('should use task add', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useTaskAdd())

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()

  act(() => {
    result.current.mutate('Passing test')
  })

  await waitForNextUpdate()

  expect(result.current.data.id).toBeTruthy()
  expect(result.current.data.title).toBe('Passing test')
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})

test('should use task delete', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useTaskDelete())

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()

  const lastTaskId = db.tasks[db.tasks.length - 1].id

  act(() => {
    result.current.mutate(lastTaskId)
  })

  await waitForNextUpdate()

  expect(result.current.data).not.toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})
