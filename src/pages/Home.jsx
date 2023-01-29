import Header from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'


export default function Home() {
  
  return (
    <>
      <Header />
      <Banner
        image={BannerImg}
        alt={'a coastal landscape'}
        // eslint-disable-next-line no-mixed-operators
        text1={'Chez vous,'}
        text2={'partout et ailleurs'}
      />
      <Gallery />
      <Footer />
    </>
  )
}
