import ErrorPage from './Error'
import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import SpinLoader from '../components/SpinLoader'
import styled from 'styled-components'

const BannerContainer = styled.div`
  @media screen and (max-width: 768px) {
    height: 115px;
  }
`

export default function Home() {
  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchAllAccomodation() {
      // we set the spinloader on until the fetch is resolved
      setDataLoading(true)

      // fetching and parsing data, finally stop Spinloader
      try {
        const response = await fetch('logements.json')
        const data = await response.json()

        // in case our catch{} doesn't handle the error...just in case but tertary condition isn't necessary
        return !data ? <ErrorPage /> : setData(data)
      } catch (error) {
        console.error(error)
        return <ErrorPage />
      } finally {
        setDataLoading(false)
      }
    }

    // we triggering our precedent function
    fetchAllAccomodation()
  }, [])

  // we triggering the spinloader during the request traitment
  return dataLoading === true ? (
    <SpinLoader />
  ) : (
    <>
      <Header />
      <BannerContainer>
        <Banner
          image={BannerImg}
          alt={'a coastal landscape'}
          text1={'Chez vous,'}
          text2={' partout et ailleurs'}
        />
      </BannerContainer>
      <Gallery data={data} />
      <Footer />
    </>
  )
}
