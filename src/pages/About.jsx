import Header from '../components/Header'
import {Banner} from '../components/Banner'
import BannerImage from '../assets/aboutBanner.jpg'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <Banner 
        image={BannerImage}
        alt={'a mountain landscape'}
      />
      <Footer />
    </>
  )
}
