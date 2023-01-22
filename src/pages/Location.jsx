import Header from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImage from '../assets/logementBackground.jpg'

export default function Location() {
  return (
    <>
      <Header />
      <Banner image={BannerImage} alt={'un intérieur cosy'} />
    </>
  )
}
