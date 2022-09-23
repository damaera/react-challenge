import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch, useQuery } from './use-api'

import db from '../../db.json'

// Api isn't mocked,
// just use real api in json-server

test('should use fetch', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetch())

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()

  act(() => {
    result.current.mutate('/tasks')
  })

  await waitForNextUpdate()

  expect(result.current.data.length).toBe(db.tasks.length)
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})

test('should use query', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useQuery('/tasks'))

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeTruthy()

  await waitForNextUpdate()

  expect(result.current.data.length).toBe(db.tasks.length)
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})
