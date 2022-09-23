import { useMutation, useQuery } from './use-api'

export const useTaskList = () => {
  return useQuery('/tasks')
}

export const useTaskAdd = () => {
  const fetchData = useMutation()
  return {
    ...fetchData,
    mutate: (title) =>
      fetchData.mutate(`/tasks`, { method: 'POST', body: { title } }),
  }
}

export const useTaskDelete = () => {
  const fetchData = useMutation()
  return {
    ...fetchData,
    mutate: (id) => {
      fetchData.mutate(`/tasks/${id}`, {
        method: 'DELETE',
      })
    },
  }
}
