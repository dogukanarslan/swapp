import { useFetch } from '../hooks/useFetch'
import { PeopleModel } from './PeopleList'

type PeopleDetailModel = {
  name: string
  birth_year: string
}

interface PeopleDetailProps {
  selectedPeople?: PeopleModel
}

export const PeopleDetail = (props: PeopleDetailProps) => {
  const { selectedPeople } = props

  const { data, isPending } = useFetch<PeopleDetailModel>(
    selectedPeople?.url || '',
  )

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
