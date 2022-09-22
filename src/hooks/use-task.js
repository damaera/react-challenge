import { useFetch, useQuery } from './use-api'

export const useTaskList = () => {
  return useQuery('/tasks')
}

export const useTaskAdd = (title) => {
  return useFetch('/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  })
}

export const useTaskDelete = () => {
  return useFetch('/tasks', {
    method: 'DELETE',
  })
}
