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
import ErrorPage from './Error'
import { useEffect, useState } from 'react'
import SpinLoader from '../components/SpinLoader'

const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 70px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 10px;
  }
`

const Aside = styled.aside`
  position: relative;
  margin-right: 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: center;
    height: min-content;
  }
`

const Section2 = styled.section`
  position: relative;
  top: 70px;
  margin: 40px 40px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    top: 0;
    margin: 0;
    margin-bottom: -80px;
    flex-direction: column;
    margin-left: 45px;
  }
`

const CollapseContainer = styled.div`
  width: 45%;
  position: relative;
  right: 0;

  @media screen and (max-width: 768px) {
    width: 104%;
    margin-left: -25px;
  }

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
  const [dataLoading, setDataLoading] = useState(true)
  const [accomodation, setAccomodation] = useState([])
  const params = useParams()

  useEffect(() => {
    async function fetchAccomodation() {
      setDataLoading(true)

      try {
        const response = await fetch('http://localhost:3000/logements.json')
        const accomodations = await response.json()
        
        // we use find() to get the accomodation corresponding to url params.id
        const accomodation = accomodations.find(
          (accomodation) => accomodation.id === params.id
        )
        
        return setAccomodation(accomodation)
       
      } 
      catch (error) {
        console.error(error)
        return <ErrorPage />
      } 
      finally {
        setDataLoading(false)
      }
    }
      
    // we trigger our precedent function
    fetchAccomodation()
  }, [params])

  // in case the url change or some user try to hack url params
  if (!accomodation) return <ErrorPage />
  else if (dataLoading === false && accomodation.id !== params.id) return < ErrorPage /> 
  
  // we triggering the spinloader during the request traitment
  return dataLoading === true ? (
    <SpinLoader />
  ) : (
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
