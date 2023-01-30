import { useFetch } from '../utils/hooks'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Host from '../components/Host'
import styled from 'styled-components'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Collapse from '../components/Collapse'

const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 70px;
`

const Aside = styled.aside`
  position: relative;
  margin-right: 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Section2 = styled.section`
  border: 2px solid blue;
  position: relative;
  top: 70px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
`

const CollapseContainer = styled.div`
  border: 2px solid red;
  //width: 45%;
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
        <article>
          <Title accomodation={accomodation} />
          <Tag accomodation={accomodation} />
        </article>
        <Aside>
          <Host accomodation={accomodation} />
          <Rate accomodation={accomodation} />
        </Aside>
      </Section1>
      <Section2>
        <CollapseContainer>
          <Collapse title={'Description'} text={''} />
        </CollapseContainer>
        <CollapseContainer>
          <Collapse />
        </CollapseContainer>
      </Section2>
      <Footer />
    </>
  )
}
