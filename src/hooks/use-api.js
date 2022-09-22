import { useState, useEffect } from 'react'

const ApiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'

export const useFetch = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch(`${ApiUrl}${url}`, options)
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

  return { data, error, isLoading, mutate: fetchData }
}

export const useQuery = (url, options) => {
  const fetchData = useFetch(url, options)

  useEffect(() => {
    fetchData.mutate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ...fetchData }
}
