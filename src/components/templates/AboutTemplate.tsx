import { Navigation, Footer } from '~/components/organisms'
import { ThisSite } from '~/components/molecules'

export const AboutTemplate: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <ThisSite />
      </div>
      <Footer />
    </>
  )
}
