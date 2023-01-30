import { useFetch } from '../utils/hooks'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Host from '../components/Host'
import styled from 'styled-components'
import Tag from '../components/Tag'

const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 70px;
`

export default function Location() {
  const { data } = useFetch(`logements.json`)
  const params = useParams()
  const accomodation = data.find(
    (accomodation) => params.id === accomodation.id
  )
  
  return (
    <>
      <Header />
      <Carrousel accomodation={accomodation} />
      <Section1>
        <div>
          <Title accomodation={accomodation} />
          <Tag accomodation={accomodation} />
        </div>
        <Host accomodation={accomodation} />
      </Section1>
      <Footer />
    </>
  )
}
