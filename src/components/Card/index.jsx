import styled from "styled-components"

const CardFigure = styled.figure`
  border: 1px solid black;
  width: 25%;
  height: 220px;
  margin: 20px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`
const CardContainer = styled.div`
  display: flex;
  position: relative;
  width: 93%;
  margin-left: 25px;
  height: 600px;
  top: 70px;
  background-color: grey;
  border-radius: 25px;
`

export default function Card(logement) {
  return (
    <CardContainer>
      <CardFigure>
        <img src={logement.cover} alt={logement.title} />
        <figcaption>{logement.title}</figcaption>
      </CardFigure>
    </CardContainer>
  )
}
