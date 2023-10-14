import { useState } from 'react'

import { PeopleDetail } from './components/PeopleDetail'
import { PeopleList } from './components/PeopleList'
import { Wrapper } from './components/Wrapper'

export const App = () => {
  const [selectedUrl, setSelectedUrl] = useState<string>()

  const selectPeople = (selectedUrl: string) => {
    setSelectedUrl(selectedUrl)
  }

  return (
    <div className="flex h-full flex-col">
      <h1 className="text-center text-4xl font-extrabold">STAR WARS</h1>
      <div className="flex h-full gap-x-4 overflow-y-auto p-4">
        <div className="w-1/5">
          <Wrapper>
            <PeopleList selectPeople={selectPeople} />
          </Wrapper>
        </div>

        <div className="w-full">
          <Wrapper>
            <PeopleDetail selectedUrl={selectedUrl} />
          </Wrapper>
        </div>
      </div>
    </div>
  )
}
