import { useState } from 'react'

import { PeopleDetail } from './components/PeopleDetail'
import { PeopleList, PeopleModel } from './components/PeopleList'
import { Wrapper } from './components/Wrapper'

export const App = () => {
  const [selectedPeople, setSelectedPeople] = useState<PeopleModel>()

  const selectPeople = (people: PeopleModel) => {
    setSelectedPeople(people)
  }

  return (
    <div className="flex h-full flex-col">
      <h1 className="mt-4 text-center text-4xl">STAR WARS</h1>
      <div className="flex h-full gap-x-4 overflow-y-auto p-4">
        <div className="w-1/5">
          <Wrapper>
            <PeopleList
              selectPeople={selectPeople}
              selectedPeople={selectedPeople}
            />
          </Wrapper>
        </div>

        <div className="w-full">
          <Wrapper>
            <PeopleDetail selectedPeople={selectedPeople} />
          </Wrapper>
        </div>
      </div>
    </div>
  )
}
