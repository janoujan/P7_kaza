import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import SpinLoader from '../components/SpinLoader'
import Location from './Location'

import { useLoaderData, Await, defer, json, Outlet } from 'react-router-dom'
import ErrorPage from './Error'
import { useFetch } from '../utils/hooks'
import React, { useState, useEffect } from 'react'

export async function loader() {
  const response =  await fetch('logements.json')
  const data =  await response.json()

  if (!data) return <SpinLoader />

  return  { data }
}

export default function Home() {
  const data = useLoaderData()
  console.log('Home/data=====>', data)
  // ===========================================
  // ^^^^^^^^try using loader ^^^^^^^^^^^^

  // const {data} = useFetch('logements.json')
  // ============================================
  // ^^^^^^^^^^^try with homemade hook^^^^^^^^^^

  // const [data, setData] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)

  // useEffect(() => {
  //   async function fetchData() {
  //     setDataLoading(true)
  //     const response = await fetch('logements.json')
  //     const data = await response.json()
  //     setData(data)
  //   }

  //   fetchData()
  // }, [])

  // console.log('====data====', data)
  // console.log('====dataLoading====', dataLoading)

  // if (!data) return

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
