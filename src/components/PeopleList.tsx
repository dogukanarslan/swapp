import { useEffect, useState } from 'react'

import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../constants'

export type PeopleModel = { name: string; birth_year: string; url: string }

type PeopleResponse = {
  results: PeopleModel[]
  next: string
}

interface PeopleListProps {
  selectPeople: (selectedUrl: PeopleModel) => void
  selectedPeople?: PeopleModel
}

export const PeopleList = (props: PeopleListProps) => {
  const { selectPeople, selectedPeople } = props

  const [skip, setSkip] = useState(false)
  const [url, setUrl] = useState(BASE_URL + 'people')
  const [currentPeople, setCurrentPeople] = useState<PeopleModel[]>([])

  const { data, isPending, error } = useFetch<PeopleResponse>(url, skip)

  useEffect(() => {
    setSkip(true)
  }, [])

  useEffect(() => {
    if (data?.results) {
      setCurrentPeople([...currentPeople, ...data.results])
    }
  }, [data])

  useEffect(() => {
    if (currentPeople.length !== 0) {
      setSkip(true)
    }
  }, [currentPeople])

  const fetchMore = () => {
    setUrl(data?.next || '')
    setSkip(false)
  }

  if (error) {
    return error
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <ul className="h-full space-y-1 overflow-y-auto p-2">
        {currentPeople.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer rounded-xl p-2 hover:bg-primary hover:text-black transition-colors${
              selectedPeople?.url === item.url ? ' bg-primary text-black' : ''
            }`}
            onClick={() => selectPeople(item)}
          >
            {item.name}
          </li>
        ))}
        {isPending && 'Loading...'}
      </ul>

      <button onClick={fetchMore}>Fetch More</button>
    </div>
  )
}
