import { useFetch } from '../hooks/useFetch'

type PeopleDetailModel = {
  name: string
  birth_year: string
}

interface PeopleDetailProps {
  selectedUrl?: string
}

export const PeopleDetail = (props: PeopleDetailProps) => {
  const { selectedUrl } = props

  const { data, isPending } = useFetch<PeopleDetailModel>(selectedUrl || '')

  return (
    <>
      <ul className="h-full p-2">
        {isPending ? (
          'Loading...'
        ) : !data ? (
          'Select a person'
        ) : (
          <>
            <li>
              <b>Name: </b>
              {data?.name}
            </li>
            <li>
              <b>Birth Year: </b>
              {data?.birth_year}
            </li>
          </>
        )}
      </ul>
    </>
  )
}
