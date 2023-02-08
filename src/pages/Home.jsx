import { useLoaderData, json, Outlet } from 'react-router-dom'
import ErrorPage from './Error'
import { useFetch } from '../utils/hooks'
import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerImg from '../assets/homeBanner.jpg'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import SpinLoader from '../components/SpinLoader'

async function GetAllAccomodation() {
  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  try {
    setDataLoading(true)
    const response = await fetch('http://localhost:3000/logements.json')
    console.info('response', response)
    const { data } = await response.json()
    setData(data)
    return { data }
  } catch (error) {
    console.error(error)
  } finally {
    setDataLoading(false)
    setData(data)
  }
}

export async function loader() {
  // no problem here cause i don't use any hook

  // try {
  //   const response = await fetch('http://localhost:3000/logements.json')
  //   console.info('response', response)
  //   const data = await response.json()

  //   if (!data) return <ErrorPage />

  //   return { data }
  // } catch (error) {
  //   console.error(error)
  //   return {}
  // }
  // return GetAllAccomodation()
}

export default function Home() {
  // ===========================================
  //  const [data, setData] = useState([])
  //  const [dataLoading, setDataLoading] = useState(false)
  // ^^^^^^^^try using loader ^^^^^^^^^^^^still work cause no hooks in loader

  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchAllAccomodation() {
      // we set the spinloader on until the fetch is resolved
      setDataLoading(true)

      // fetching and parsing data, finally stop Spinloader
      try {
        const response = await fetch('http://localhost:3000/logements.json')
        const data = await response.json()
        // in case our catch{} is not triggered...anything can happen 😆🤣😅
        return !data ? <ErrorPage /> : setData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setDataLoading(false)
      }
    }
    // we triggering our precedent function
    fetchAllAccomodation()
  }, [])

  // we triggering the spinloader during the request traitment
  while (dataLoading === true) return <SpinLoader />

  return (
    <>
      <Outlet />
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
