import { useState, useEffect } from 'react'
const ApiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'

export const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const fetchData = (url, options = {}) => {
    setLoading(true)
    fetch(`${ApiUrl}${url}`, {
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined,
      headers: {
        ...options.headers,
        Accept:
          options.headers && options.headers.Accept
            ? options.headers.Accept
            : 'application/json',
        'Content-Type':
          options.headers && options.headers['Content-Type']
            ? options.headers['Content-Type']
            : 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setError(null)
      })
      .catch((error) => {
        setData(null)
        setError(error)
      })
      .finally(() => setLoading(false))
  }

  return {
    data,
    error,
    isLoading,
    mutate: (url, options) => fetchData(url, options),
  }
}

export const useQuery = (url, options = {}) => {
  const fetchData = useFetch()

  useEffect(() => {
    fetchData.mutate(url, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ...fetchData }
}

export const useMutation = useFetch
