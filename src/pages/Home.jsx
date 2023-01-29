import { useFetch } from '../utils/hooks'

import Header from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'


export default function Home() {
//   const [data, setData] = useState([])

// useEffect(() => {
//     fetch('logements.json')
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((error) => console.log(error))
//   }, [])
  
  const { data } = useFetch(`logements.json`)
  return (
    <>
      <Header />
      <Banner
        image={BannerImg}
        alt={'a coastal landscape'}
        text1={'Chez vous,'}
        text2={'partout et ailleurs'}
      />
      <Gallery data={data} />
      <Footer />
    </>
  )
}
