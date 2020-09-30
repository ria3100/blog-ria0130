import { SectionTitle } from '~/components/atoms'
import { MainSkilListItem, SubSkilListItem } from '~/components/molecules'

import { mainSkils, subSkils } from '~/data/skils'

export const SkilList: React.FC = () => {
  return (
    <section className="text-gray-700 body-font my-20">
      <div className="container px-5 mx-auto">
        <SectionTitle>Skils</SectionTitle>
        <div className="flex flex-wrap -m-2">
          {mainSkils.map((skil) => (
            <MainSkilListItem item={skil} key={skil.name} />
          ))}
        </div>

        <div className="flex flex-wrap w-full sm:mb-2 text-sm mt-8">
          {subSkils.map((name) => (
            <SubSkilListItem name={name} key={name} />
          ))}

          <div className="p-2 sm:w-1/4 w-1/2">
            <div className="flex h-full items-center">
              <span className="title-font font-medium">etc.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
