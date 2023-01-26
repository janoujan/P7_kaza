import Header from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'

export default function Home() {
  const locations = useFetch('./logements.json')
  console.log(locations.data)

  const params = useParams()
  const location = locations.find((location) => 
    location.id === params.id)
    console.log('paramsId :', params.id)
    console.log('location :', location)

  return (
    <>
      <Header />
      <Banner
        image={BannerImg}
        alt={'a coastal landscape'}
        text={'Chez vous, partout et ailleurs'}
      />
      <ul>
        
      <li key={location.id}>
        <Card />
      </li>

      
      </ul>
        
      <Footer />
    </>
  )
}
