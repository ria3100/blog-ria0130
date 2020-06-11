import * as React from 'react'

import { SectionTitle } from '~/components/atoms'
import { MainSkilListItem, SubSkilListItem } from '~/components/molecules'

import { mainSkils, subSkils } from '~/data/skils'

const SkilList: React.FC = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle>Skils</SectionTitle>
        <div className="flex flex-wrap -m-2">
          {mainSkils.map(skil => (
            <MainSkilListItem item={skil} key={skil.label} />
          ))}
        </div>

        <div className="flex flex-wrap w-full sm:mb-2 text-sm mt-8">
          {subSkils.map(name => (
            <SubSkilListItem name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkilList
