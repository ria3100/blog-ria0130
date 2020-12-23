// import { useAmp } from 'next/amp'

import { ShareButtons } from '~/components/molecules'
// import { Like } from '~/components/atoms'

type Props = {
  title: string
  path: string
}

export const ArticleFooter: React.FC<Props> = ({ title, path }) => {
  // const isAmp = useAmp()

  return (
    <div className="w-full">
      <div className="px-4 mb-24">
        {/* {isAmp && <Like path={path} />} */}
        <ShareButtons title={title} path={path} />
      </div>

      {/* <div className="border border-gray-200 p-6 rounded-lg mx-4 mb-12">
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 sm:text-center">
          Author
        </h2>
        <div className="flex items-start">
          <div className="flex flex-row w-32 h-32 mb-4">
            <img
              className="rounded-full"
              src="https://pbs.twimg.com/profile_images/1222177937182482433/aS6hxN-R_400x400.jpg"
            />
          </div>
          <div className="flex flex-row px-4">
            <div>
              <h2 className="text-lg text-gray-900 title-font mb-2">Ria</h2>
            </div>
            <p className="leading-relaxed text-base">foo</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
