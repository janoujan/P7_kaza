import Header from '../components/Header'
import {Banner} from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery/index'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Banner
        image={BannerImg}
        alt={'a coastal landscape'}
        text={'Chez vous, partout et ailleurs'}
      />
      <Gallery />
      <Footer />
    </>
  )
}
