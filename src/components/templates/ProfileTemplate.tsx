import { Navigation, Footer, SkilList } from '~/components/organisms'
import { Profile } from '~/components/molecules'

export const ProfileTemplate: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <Profile />
        <SkilList />
      </div>
      <Footer />
    </>
  )
}
