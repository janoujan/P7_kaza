import Header from '../components/Header'
import {Banner} from '../components/Banner'
import BannerImage from '../assets/aboutBanner.jpg'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <Banner image={BannerImage} alt={'a mountain landscape'} />
      <Collapse
        title={'fiabilité'}
        text={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        }
      />
      <Footer />
    </>
  )
}
