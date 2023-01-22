import Header from '../components/Header'
import {Banner} from '../components/Banner'
import BannerImage from '../assets/aboutBanner.jpg'
import Dropdown from '../components/Dropdown/index'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <Banner image={BannerImage} alt={'a moutain landscape'} text={'coucou'} />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Footer />
    </>
  )
}
