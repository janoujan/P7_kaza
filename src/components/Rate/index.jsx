import styled from 'styled-components'
import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'
import Flex from '../../utils/style/displayFlex'

const StarContainer = styled.div`
  ${Flex};
  flex-wrap: no-wrap;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 768px) {
    top: 20px;
    margin-left: 20px;
  }

  @media screen and (min-width: 1440px) {
    right: 1.6rem;
  }
`

const Star = styled.img`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

export default function Rate({ accomodation }) {
  const ratings = [1, 2, 3, 4, 5]
  return (
    <StarContainer>
      {/* here we map our array rating and we compare it to the accomodation rating in a ternary to display the right amount of star */}
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
