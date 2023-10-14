import { useState, useEffect } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const response = await fetch(url)
        const json = (await response.json()) as T
        setIsPending(false)
        setData(json)
      } catch (error) {
        setError(`${error}. Could not fetch data`)
        setIsPending(false)
      }
    }

    if (url) {
      fetchData()
    }
  }, [url])

  return { data, isPending, error }
}
