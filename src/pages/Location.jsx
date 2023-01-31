import { useFetch } from '../utils/hooks'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Title from '../components/Title'
import Host from '../components/Host'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

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
  position: relative;
  top: 70px;
  margin: 40px 40px 0;
  display: flex;
  justify-content: space-between;
`

const CollapseContainer = styled.div`
  width: 45%;
  position: relative;
  right: 0;

  @media screen and (min-width: 1440px) {
    margin-left: 2.2vw;
    right: 2.2vw;
  }
`

const EquipementsList = styled.li`
  margin-bottom: 10px;
  list-style: none;
`

const Article = styled.article`
  width: -moz-available;
  width: -webkit-fill-available; ;
`

export default function Location() {
  const { data } = useFetch(`logements.json`)
  const params = useParams()
  const accomodation = data.find(
    (accomodation) => params.id === accomodation.id
  )
  if (!accomodation) return
  return (
    <>
      <Header />
      <Carrousel accomodation={accomodation} />
      <Section1>
        <Article>
          <Title accomodation={accomodation} />
          <Tag accomodation={accomodation} />
        </Article>
        <Aside>
          <Host accomodation={accomodation} />
          <Rate accomodation={accomodation} />
        </Aside>
      </Section1>
      <Section2>
        <CollapseContainer>
          <Collapse title={'Description'} text={accomodation.description} />
        </CollapseContainer>
        <CollapseContainer>
          <Collapse
            title={'Equipements'}
            text={accomodation.equipments.map((equipment, index) => (
              <EquipementsList key={`${equipment}-${index}`}>
                {equipment}
              </EquipementsList>
            ))}
          />
        </CollapseContainer>
      </Section2>
      <Footer />
    </>
  )
}
