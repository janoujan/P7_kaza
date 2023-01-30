import styled from 'styled-components'
import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'

const StarContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-end;
`

const Star = styled.img`
  width: 30px;
  height: 30px;
`

export default function Rate({ accomodation }) {
  if (!accomodation) return

  const ratings = [1, 2, 3, 4, 5]
  return (
    <StarContainer>
      {ratings.map((rating, index) => {
        return accomodation.rating >= rating ? (
          <Star key={index} src={fullStar} alt="full star" />
        ) : (
          <Star key={index} src={emptyStar} alt="empty star" />
        )
      })}
    </StarContainer>
  )
}
