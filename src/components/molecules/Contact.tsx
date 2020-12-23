import { SectionTitle } from '~/components/atoms'

export const Contact: React.FC = () => {
  return (
    <section className="text-gray-700 body-font my-20">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <SectionTitle>Contact</SectionTitle>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <p className="pb-2">
              お問い合わせ、ご依頼等ございましたら{' '}
              <a
                href="https://twitter.com/_Ria0130"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{' '}
              の DM までお願いします。
            </p>
            <p className="pb-2">
              副業のほかにもオープンな活動も募集しています。
            </p>
          </p>
        </div>
      </div>
    </section>
  )
}
