import { useState, useEffect } from 'react'

export const useFetch = <T>(url: string, skip = false) => {
  const [data, setData] = useState<T>()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      if (skip) {
        return
      }

      setIsPending(true)
      try {
        const response = await fetch(url, { signal })
        const json = (await response.json()) as T
        setIsPending(false)
        setData(json)
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(`${error}. Could not fetch data`)
          setIsPending(false)
        }
      }
    }

    if (url) {
      fetchData()
    }

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}
