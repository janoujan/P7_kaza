import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import SpinLoader from '../components/SpinLoader'

import { useLoaderData, Await, defer, json } from 'react-router-dom'
import ErrorPage from './Error'
import { useFetch } from '../utils/hooks'
import React, { useState, useEffect } from 'react'

export async function loader() {
  const response = fetch('logements.json')
  const data = json(response)

  return defer({data})
}

export default function Home() {
  const data = useLoaderData()

  // const {data} = useFetch('logements.json')
  // ============================================
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('logements.json')

  //     const data = await response.json()

  //     setData(data)
  //   }

  //   fetchData()
  // }, [])
  // =================================================


  return (
    <>
      <Header />
      <Banner
        image={BannerImg}
        alt={'a coastal landscape'}
        text1={'Chez vous,'}
        text2={'partout et ailleurs'}
      />
      <React.Suspense fallback={<SpinLoader />}>
        <Await resolve={data} errorElement={<p>error loading data</p>}>
          {(data) => <Gallery data={data} />}
        </Await>
      </React.Suspense>
      <Footer />
    </>
  )
}
