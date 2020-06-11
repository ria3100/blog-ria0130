import * as React from 'react'

import { SectionTitle } from '~/components/atoms'
import { SkilListItem } from '~/components/molecules'

const SkilList: React.FC = () => {
  const skils = [
    { label: 'TypeScript', img: '' },
    { label: 'JavaScript', img: '' },
    { label: 'React', img: '' },
  ] as const

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle>Skils</SectionTitle>
        <div className="flex flex-wrap -m-2">
          {skils.map(skil => (
            <SkilListItem item={skil} key={skil.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkilList
