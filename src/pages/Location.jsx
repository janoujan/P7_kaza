import { useFetch } from '../utils/hooks'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logements from '../utils/data/logements.json'

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'

export default function Location() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('logements.json')
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((error) => console.log(error))
  // }, [])

  // const locations = useFetch(`logements.json`)

  const params = useParams()

  let logement = logements.find((logement) => params.id === logement.id)
  
  return (
    <>
      <Header />
      <Carrousel logement={logement} />
      <Footer />
    </>
  )
}
