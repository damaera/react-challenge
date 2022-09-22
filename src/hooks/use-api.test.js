import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'

import { useFetch } from './use-api'

import db from '../../db.json'

beforeEach(() => {
  fetchMock.reset()
})

test('should use fetch', async () => {
  fetchMock.get('http://localhost:3001/tasks', db.tasks)

  const { result } = renderHook(() => useFetch('/tasks'))

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})

test('should use query', async () => {
  fetchMock.get('http://localhost:3001/tasks', db.tasks)

  const { result } = renderHook(() => useFetch('/tasks'))

  expect(result.current.data).toBeNull()
  expect(result.current.error).toBeNull()
  expect(result.current.isLoading).toBeFalsy()
})
