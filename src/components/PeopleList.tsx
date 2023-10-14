import { useEffect, useState } from 'react'

import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../constants'

type PeopleModel = { name: string; birth_year: string; url: string }

type PeopleResponse = {
  results: PeopleModel[]
  next: string
}

interface PeopleListProps {
  selectPeople: (selectedUrl: string) => void
}

export const PeopleList = (props: PeopleListProps) => {
  const { selectPeople } = props

  const [url, setUrl] = useState(BASE_URL + 'people')
  const [currentPeople, setCurrentPeople] = useState<PeopleModel[]>([])

  const { data, isPending, error } = useFetch<PeopleResponse>(url)

  useEffect(() => {
    if (data?.results) {
      setCurrentPeople([...currentPeople, ...data.results])
    }
  }, [data])

  if (error) {
    return error
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <ul className="h-full space-y-4 overflow-y-auto">
        {isPending
          ? 'Loading...'
          : currentPeople.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => selectPeople(item.url)}
              >
                {item.name}
              </li>
            ))}
      </ul>

      <button onClick={() => setUrl(data?.next || '')}>Fetch More</button>
    </div>
  )
}
