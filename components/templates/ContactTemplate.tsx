import { Navigation, Footer } from '~/components/organisms'
import { Contact } from '~/components/molecules'

export const ContactTemplate: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <Contact />
      </div>
      <Footer />
    </>
  )
}
